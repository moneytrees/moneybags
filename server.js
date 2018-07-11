const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const PlaidController = require('./api/controllers/plaidController');
const bodyParser = require('body-parser');
global.__plaidClient = false;
require('dotenv').config();

const app = express();

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
walker.getRoutes({ dir: './api/routes', app: app, express: express});
const BPORT = process.env.BPORT || 3001;
//TODO restore https after tests have been created for secure routes
const httpsOptions = {
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')
};

/*const server = https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Secure server listening on port ${PORT}`);
});*/
app.listen(3001, () => {console.log(`Unsecure server listening on port ${BPORT}`)});

module.exports = app;