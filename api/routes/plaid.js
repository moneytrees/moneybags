const User = require("../../db/models/user");
const PlaidController = require(__basedir + 'api/controllers/plaidController');


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

			User.findOne({ _id: user_id },
			).then((user) => {
				if (user.institutions[0]) {
					return console.log("you've already got a inst set.")
				} else {
					user.institutions.push(instData)
					console.log("saving")
					user.save();
				}
			}
			).catch(err => console.log(err))
			response.json(instData)
		});
	});

	plaidRouter.post("/api/accounts", function (request, response, next) {
		// Retrieve high-level account information and account and routing numbers
		// for each account associated with the Item.
		let user_id = request.body.user_id
		let arg;
		User.findOne({ _id: user_id },
		).then((user) => {
			arg = user.institutions[0].access_token
			__plaidClient
				.getAccountInfo(__plaidClient.holder(arg))
				.then(accountinfo => {
					var userAccount2 = []
					var accountObj = {
						account_id: accountinfo.accounts[0].account_id,
						balances: [{
							available: accountinfo.accounts[0].balances.available,
							current: accountinfo.accounts[0].balances.current,
						}],
						mask: accountinfo.accounts[0].mask,
						name: accountinfo.accounts[0].name,
						official_name: accountinfo.accounts[0].official_name,
						subtype: accountinfo.accounts[0].subtype,
						type: accountinfo.accounts[0].type
					}

					User.findOne({ _id: user_id },
					).then((user) => {
						if (user.institutions[0].account_ids[0]) {
							response.json(user.institutions[0].account_ids[0])
							return console.log("you've already got a account set.")
						} else {
							user.institutions[0].account_ids.push(accountObj)
							console.log("saving")
							user.save();
							response.json(accountinfo)
						}
					}
					).catch(err => console.log(err))
				});
		}
		).catch(err => console.log(err))



	});

	plaidRouter.post("/api/item", function (request, response, next) {
		__plaidClient
			.getItem(__plaidClient.accessToken)
			.then(itemInfo => response.json(itemInfo));
	});
	plaidRouter.post("/api/transactions", function (request, response, next) {
		let user_id = request.body.user_id
		let arg;
		User.findOne({ _id: user_id },
		).then((user) => {
			arg = user.institutions[0].access_token
			__plaidClient.transactionDaysAgo = 30;
			__plaidClient
				.getTransactions(__plaidClient.holder(arg))
				.then(data => response.json(data))
		}
		).catch(err => console.log(err))
	});
	return plaidRouter;
};