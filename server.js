const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const plaid = require('plaid');
const bodyParser = require('body-parser');
const moment = require('moment');
const ejs = require('ejs');
var SwaggerExpress = require('swagger-express-mw');
require('dotenv').config();

const app = express();

const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
};

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

const client = new plaid.Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    plaid.environments[process.env.PLAID_ENV]
);

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
    PUBLIC_TOKEN = request.body.public_token;
    client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
        if (error != null) {
            var msg = 'Could not exchange public_token!';
            console.log(msg + '\n' + JSON.stringify(error));
            return response.json({
                error: msg
            });
        }
        ACCESS_TOKEN = tokenResponse.access_token;
        ITEM_ID = tokenResponse.item_id;
        console.log('Access Token: ' + ACCESS_TOKEN);
        console.log('Item ID: ' + ITEM_ID);
        response.json({
            'error': false
        });
    });
});

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
});

app.post('/transactions', function (req, res, next) {
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
});

var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port);

    if (swaggerExpress.runner.swagger.paths['/swagger']) {
        console.log('TBA');
    }
});

const port = process.env.PORT || 3001;

const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Secure server listening on port ${port}`);
});