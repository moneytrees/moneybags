#!/usr/bin/env nodejs
require('dotenv').config();
const https = require('https');
const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const walker = require('./helpers/general/file_traverse');
//const PlaidController = require('./api/controllers/plaidController');
//const SwaggerExpress = require('swagger-express-mw');
global.__basedir = __dirname + '/';
global.__plaidClient = false;

//------------ MIDDLEWARE -------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("client/build"));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	et('Content-Encoding', 'gzip');
	next();
});
//------------ DATABASE -----------------------
const db = require("./config/keys").mongoURI;

mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

//----------- ROUTING ---------------------
walker.getRoutes({ dir: './api/routes', app: app, express: express });
const BPORT = process.env.BPORT || 3001;
//TODO restore https after tests have been created for secure routes
// const httpsOptions = {
//     key: fs.readFileSync('./security/cert.key'),
//     cert: fs.readFileSync('./security/cert.pem')
// };
/*const server = https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Secure server listening on port ${PORT}`);
});*/
app.listen(3001, () => { console.log(`Unsecure server listening on port ${BPORT}`) });

module.exports = app;

