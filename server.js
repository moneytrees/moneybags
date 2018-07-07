const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const plaid = require("plaid");
const moment = require("moment");
var SwaggerExpress = require("swagger-express-mw");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//------------ MIDDLEWARE -------------
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(express.static("client/build"));

//----------- ROUTING ---------------------
const users = require("./routes/api/users");

app.get("/", (req, res) => res.send("THE APP IS ONLINE MUTHUFUCKAAAA"));
app.use("/api/users", users);

//----------- SWAGGER ---------------------
var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/swagger"]) {
    console.log(`Swagger listening on port: ${port}`);
  }
});

//------------ DATABASE -----------------------
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("🦔 MongoDB Connected 🦔"))
  .catch(err => console.log(err));

//---------- SERVER LISTENING // HTTPS --------------
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`SERVER LISTENING ON ${PORT}`));

// const httpsOptions = {
//   key: fs.readFileSync("./security/cert.key"),
//   cert: fs.readFileSync("./security/cert.crt")
// };

// const server = https.createServer(httpsOptions, app).listen(PORT, () => {
//   console.log(`Secure server listening on PORT: ${PORT}`);
// });
