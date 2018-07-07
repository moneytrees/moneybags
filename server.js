const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const PlaidController = require('./api/controllers/plaidController');
const bodyParser = require('body-parser');
const moment = require('moment');
const ejs = require('ejs');
const SwaggerExpress = require('swagger-express-mw');
global.__plaidClient = false;
require('dotenv').config();

const app = express();

const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
};

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('client/build'));
// app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.json({
        PLAID_PUBLIC_KEY: process.env.PLAID_PUBLIC_KEY,
        PLAID_ENV: process.env.PLAID_ENV
    });    
});

app.post('/get_access_token', function (request, response, next) {
    console.log(request.body);
    global.__plaidClient = new PlaidController(request.body);
    __plaidClient.getAccessToken().then(link => response.json(link));
});

app.post('/api/get_access_token', function (request, response, next) {
    console.log(request.body);
    global.__plaidClient = new PlaidController(request.body);
    __plaidClient.getAccessToken().then(link => response.json(link));
});
/*
app.get('/accounts', function (request, response, next) {
    // Retrieve high-level account information and account and routing numbers
    // for each account associated with the Item.
    client.getAuth(ACCESS_TOKEN, function (error, authResponse) {
        if (error != null) {
            var msg = 'Unable to pull accounts from the Plaid API.';
            console.log(msg + '\n' + JSON.stringify(error));
            return response.json({
                error: msg
            });
        }

        console.log(authResponse.accounts);
        response.json({
            error: false,
            accounts: authResponse.accounts,
            numbers: authResponse.numbers,
        });
    });
});

app.post('/item', function (request, response, next) {
    // Pull the Item - this includes information about available products,
    // billed products, webhook information, and more.
    client.getItem(ACCESS_TOKEN, function (error, itemResponse) {
        if (error != null) {
            console.log(JSON.stringify(error));
            return response.json({
                error: error
            });
        }

        // Also pull information about the institution
        client.getInstitutionById(itemResponse.item.institution_id, function (err, instRes) {
            if (err != null) {
                var msg = 'Unable to pull institution information from the Plaid API.';
                console.log(msg + '\n' + JSON.stringify(error));
                return response.json({
                    error: msg
                });
            } else {
                response.json({
                    item: itemResponse.item,
                    institution: instRes.institution,
                });
            }
        });
    });
});*/

/*app.post('/transactions', function (req, res, next) {
    // Pull transactions for the Item for the last 30 days
    var startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    var endDate = moment().format('YYYY-MM-DD');
    client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
        count: 250,
        offset: 0,
    }, function (error, transactionsResponse) {
        if (error != null) {
            console.log(JSON.stringify(error));
            return res.json({
                error: error
            });
        }
        console.log('pulled ' + transactionsResponse.transactions.length + ' transactions');
        // transactionsResponse.transactions.forEach((item, index) => {
        //     console.log(item.category);
        // });
        // console.log(transactionsResponse);
        res.json(transactionsResponse);
    });
});*/

var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(app);

    let swagport = process.env.SWAGGER_PORT || 10010;
    app.listen(swagport);

    if (swaggerExpress.runner.swagger.paths['/api/swagger']) {
        console.log('Swagger ready and running');
    }
});

const port = process.env.PORT || 3001;

const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Secure server listening on port ${port}`);
});