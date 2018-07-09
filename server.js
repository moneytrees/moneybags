require('dotenv').config();
const https = require('https');
const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const routes_walker = require('node-walker');

//const PlaidController = require('./api/controllers/plaidController');
//const SwaggerExpress = require('swagger-express-mw');
global.__basedir = __dirname;
global.__plaidClient = false;

//------------ MIDDLEWARE -------------
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(express.static("client/build"));

app.get("/", (req, res) => res.send("THE APP IS ONLINE"));

const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
};

//----------- ROUTING ---------------------

routes_walker( './api/routes',
    function (errorObject, fileName, fnNext) {
        if (errorObject) throw errorObject;
        if (fileName !== null) {
            const route = require(fileName);
            route.register(express);
            console.log(fileName);
            console.log(__basedir.length);
            //console.log(`Route ${fileName.substr(__basedir.length +1)} included.`);
        }
        if (fileName === null) {

            return;
        }
        if (fnNext) fnNext();
        else {
            console.log('All routes included');
            const BPORT = process.env.BPORT || 3001;
            const server = https.createServer(httpsOptions, app).listen(BPORT, () => {

                console.log(`Secure server listening on port ${BPORT}`);
            });

        }
    }
);

//------------ DATABASE -----------------------
const db = require("./config/keys").mongoURI;

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//app.listen(PORT, () => {console.log(`SERVER LISTENING ON PORT: ${PORT}`)});
module.exports = app;