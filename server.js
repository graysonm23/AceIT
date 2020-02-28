const express = require("express");
const app = express();
const mongoose = require("mongoose");
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


// Connect to the Mongo DB with heroku or local
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aceit");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
