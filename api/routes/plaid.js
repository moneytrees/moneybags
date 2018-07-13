//const { ensureAuthenticated } = require(path.join(__basedir,'/helpers/auth'));
//const plaidController = require(path.join(__basedir,'/controllers/*.js'));
const User = require("../../db/models/user");
const PlaidController = require(__basedir + 'api/controllers/plaidController');
var user_m = new User;


module.exports = function (app, express) {
    const plaidRouter = express.Router();
    global.__plaidClient = new PlaidController();

    plaidRouter.get("/api/get_public_key", function (request, response, next) {
        return response.json(__plaidClient.getPublicKey());
    });

    plaidRouter.post("/api/get_access_token", function (request, response, next) {
        __plaidClient.publicToken = request.body.public_token;
        __plaidClient.metaData = request.body.metadata;
        __plaidClient.institution = request.body.metadata.institution;
        let inst_data = __plaidClient.metaData.institution
        let user_id = request.body.user_id

        __plaidClient.getAccessToken().then((link) => {

            var instData = {
                access_token: link.access_token,
                item_id: link.item_id,
                bank_name: inst_data.name,
                inst_id: inst_data.institution_id
            }

            User.findOne({ _id: user_id }).then((user) => {
                console.log(user)
                user.institutions.push(instData)
                var subdoc = user.institutions[0];
                console.log(user.institutions[0]);
                subdoc.isNew;

                user.save();

            }
            ).catch(err => console.log(err))


            response.json(instData)
        });
        //__plaidClient.accessToken = 
    });

    plaidRouter.get("/api/accounts", function (request, response, next) {
        // Retrieve high-level account information and account and routing numbers
        // for each account associated with the Item.
        __plaidClient
            .getAccountInfo(__plaidClient.accessToken)
            .then(accountinfo => response.json(accountinfo));
    });

    plaidRouter.post("/api/item", function (request, response, next) {
        __plaidClient
            .getItem(__plaidClient.accessToken)
            .then(itemInfo => response.json(itemInfo));
    });

    plaidRouter.post("/api/transactions", function (request, response, next) {
        __plaidClient.transactionDaysAgo = 30;
        __plaidClient
            .getTransactions(__plaidClient.accessToken)
            .then(transactions => response.json(transactions));
    });

    return plaidRouter;
};