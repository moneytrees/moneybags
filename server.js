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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('client/build'));
// app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
    res.json({
        PLAID_PUBLIC_KEY: process.env.PLAID_PUBLIC_KEY,
        PLAID_ENV: process.env.PLAID_ENV
    });    
});

app.post('/api/get_access_token', function (request, response, next) {
    global.__plaidClient = new PlaidController();
    __plaidClient.publicToken = request.body.public_token;
    __plaidClient.getAccessToken().then(link => response.json(link));
});

app.get('/api/accounts', function (request, response, next) {
    // Retrieve high-level account information and account and routing numbers
    // for each account associated with the Item.
    __plaidClient.getAccountInfo(__plaidClient.accessToken).then(accountinfo => response.json(accountinfo));
});

app.post('/api/item', function (request, response, next) {
    __plaidClient.getItem(__plaidClient.accessToken).then(itemInfo => response.json(itemInfo));
});

app.post('/api/transactions', function (req, res, next) {
    __plaidClient.transactionDaysAgo(30);
    __plaidClient.getTransactions().then(transactions => response.json(transactions));
});

const port = process.env.PORT || 3001;

const server = https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Secure server listening on port ${port}`);
});

module.exports = app;