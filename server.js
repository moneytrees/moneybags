const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
//const SwaggerExpress = require('swagger-express-mw');
global.__plaidClient = false;
require("dotenv").config();

//------------ MIDDLEWARE -------------
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("client/build"));

const httpsOptions = {
  key: fs.readFileSync("./security/cert.key"),
  cert: fs.readFileSync("./security/cert.pem")
};

//----------- ROUTING ---------------------
const users = require("./routes/api/users");

app.get("/", (req, res) => res.send("THE APP IS ONLINE"));
app.use("/api/users", users);

//------------ DATABASE -----------------------
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//----------- PLAID ROUTES ------------------------
const PlaidController = require("./api/controllers/plaidController");

app.post("/api/get_access_token", function(request, response, next) {
  global.__plaidClient = new PlaidController();
  __plaidClient.publicToken = request.body.public_token;
  __plaidClient.getAccessToken().then(link => response.json(link));
});

app.get("/api/accounts", function(request, response, next) {
  // Retrieve high-level account information and account and routing numbers
  // for each account associated with the Item.
  __plaidClient
    .getAccountInfo(__plaidClient.accessToken)
    .then(accountinfo => response.json(accountinfo));
});

app.post("/api/item", function(request, response, next) {
  __plaidClient
    .getItem(__plaidClient.accessToken)
    .then(itemInfo => response.json(itemInfo));
});

app.post("/api/transactions", function(request, response, next) {
  __plaidClient.transactionDaysAgo = 30;
  __plaidClient
    .getTransactions()
    .then(transactions => response.json(transactions));
});

//--------- START SERVER -----------------------
const PORT = process.env.PORT || 3001;

//app.listen(PORT, () => {console.log(`SERVER LISTENING ON PORT: ${PORT}`)});

const server = https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Secure server listening on port ${PORT}`);
});

module.exports = app;
