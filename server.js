require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var db = require("./models/UserSchema");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
require("./routes/apiRoutes")(app, parseToken, jwtVerify);

function parseToken(request, response, next) {
  //get auth header value
  var bearerHeader = request.headers["authorization"];
  console.log("This is bearer header ", bearerHeader);

  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    console.log("im here dad");
    //split at the space
    var bearer = bearerHeader.split(" ");
    //get token from array
    var bearerToken = bearer[1];
    //set the token
    request.token = bearerToken;
    //Next middleware
    next();
  } else {
    //forbidden
    console.log("im here mom");
    // return response.json();
    response.sendStatus(403);
    // return response.sendStatus(403);
  }
}

function jwtVerify(req, res, next) {
  console.log("verifying token...");
  jwt.verify(req.token, process.env.SECRET_KEY, function(err, authData) {
    if (err) {
      console.log(
        "This is your token in JWT Verify " + JSON.stringify(req.token)
      );
      console.log("This is your error JWT Verify logic " + err);
      res.redirect("login"); //forbidden error
    } else {
      db.Users.findOne({
        where: {
          user_id: authData.user
        }
      }).then(function(response) {
        console.log("JWT has Verified your token");
        return res.json(response);
      });
    }
  });
  next();
}

// Connect to the Mongo DB with heroku or local
mongoose.connect(MONGODB_URI || "mongodb://localhost/aceit");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
