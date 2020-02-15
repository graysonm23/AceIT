var db = require("../models");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var mailgun = require("mailgun-js");
var saltRounds = 10;
var crypto = require("crypto");
require("dotenv").config();

module.exports = function(app) {
  app.post("/login", function(req, res) {
    console.log(req.body);
    db.Users.findOne({
      where: {
        email: req.body.email
      }
      // eslint-disable-next-line no-unused-vars
    }).then(function(dbUsers) {
      if (dbUsers) {
        //if account exists
        bcrypt.compare(req.body.password, dbUsers.password, function(
          //compare hashed password
          err,
          response
        ) {
          if (err) {
            var mg = mailgun({
              apiKey: process.env.MAILGUN_API_KEY,
              domain: process.env.MAILGUN_DOMAIN
            });
            var data = {
              from: "SimpleFlow <simpleflow2020@gmail.com>",
              to: req.body.email,
              subject: "Login Attempt",
              template: "login"
            };
            mg.messages().send(data, function(error, body) {
              console.log(body);
            });

            return res.json({
              success: false,
              message: "passwords do not match"
            });
          }
          if (response) {
            //if passwords match
            // res.json(dbUsers);
            var user = dbUsers.dataValues.user_id;
            jwt.sign(
              { user: user },
              process.env.SECRET_KEY,
              { expiresIn: "10 days" } /*sets token to expire in 30 seconds*/,
              function(err, token) {
                res.json({ token: token, message: "success" });
              }
            );

            // res.render("userprofile", { msg: "Email has been sent" });
          }
        });
      } else {
        //if account does not exist
        return res.json({ success: false, message: "no account found" });
      }
    });
    // eslint-disable-next-line no-undef
  });

  app.post("/api/dashboard", parseToken, function(req, res) {
    console.log(req.token);
    jwt.verify(req.token, process.env.SECRET_KEY, function(err, authData) {
      if (err) {
        res.status(403); //forbidden error
        console.log(err);
      } else {
        var userID = authData.user;
        db.Tasks.findAll({ where: { user_id: userID } }).then(function(
          dbTasks
        ) {
          if (dbTasks) {
            res.json(dbTasks);
            console.log("iran");
          } else {
            res.json("no tasks found");
          }
        });
      }
    });
  });
  app.post("/signup", function(req, res) {
    var mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    });
    var data = {
      from: "SimpleFlow <simpleflow2020@gmail.com>",
      to: req.body.email,
      subject: "Welcome",
      template: "signuptemplate"
    };
    mg.messages().send(data, function(error, body) {
      console.log(body);
    });
    var myPlaintextPassword = req.body.password;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        if (err) {
          throw err;
        }
        db.Users.create({
          name: req.body.name,
          email: req.body.email,
          password: hash
        }).then(function(dbUsers) {
          res.json({ status: "success" });
          // eslint-disable-next-line no-console
          console.log(dbUsers);
        });
      });
    });
  });

  app.post("/forgot", function(req, res) {
    var resetExpiration = Date.now() + 3600000;
    var resetToken = crypto.randomBytes(20).toString("hex");
    db.Users.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(dbUsers) {
      console.log(dbUsers);
      if (dbUsers) {
        db.Users.update(
          {
            resetPasswordToken: resetToken,
            resetPasswordExpires: resetExpiration
          },
          {
            where: { email: req.body.email },
            returning: true,
            plain: true
          }
        )
          .then(function(dbresponse) {
            console.log(dbresponse);
            if (dbresponse[1] === 1) {
              console.log("This is req headers" + req.headers.host);
              console.log("Successfully updated token in database");
              var mg = mailgun({
                apiKey: process.env.MAILGUN_API_KEY,
                domain: process.env.MAILGUN_DOMAIN
              });
              var data = {
                from: "SimpleFlow <simpleflow2020@gmail.com>",
                to: req.body.email,
                subject: "Reset Password",
                text:
                  "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
                  "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
                  "http://" +
                  req.headers.host +
                  "/reset/" +
                  resetToken +
                  "/" +
                  resetExpiration +
                  "\n\n" +
                  "If you did not request this, please ignore this email and your password will remain unchanged.\n"
              };
              mg.messages().send(data, function(error, body) {
                console.log(body);
              });
              res.json({
                success: true,
                message: "password token successfully sent",
                token: resetToken,
                expiration: resetExpiration
              });
            } else {
              console.log("Unsuccessfully updated token in database");

              return res.json({
                success: false,
                message: "no user found in database"
              });
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    });
  });
  app.get("/reset/:token/:date", function(req, res) {
    db.Users.findOne({
      where: {
        resetPasswordToken: req.params.token,
        resetPasswordExpires: req.params.date
      }
    }).then(function(dbUsers) {
      if (!dbUsers) {
        return res.json({
          success: false,
          message: "password token is invalid or has expired"
        });
      } else {
        res.render("reset", { token: req.params.token, date: req.params.date });
      }
    });
  });
  app.post("/reset/:token/:date", function(req, res) {
    db.Users.findOne({
      where: {
        resetPasswordToken: req.params.token,
        resetPasswordExpires: req.params.date
      }
    }).then(function(dbUsers) {
      if (!dbUsers) {
        return res.json({
          success: false,
          message: "couldn't find the user email"
        });
      }
      if (req.body.password === req.body.confirm) {
        var myPlaintextPassword = req.body.password;
        bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            if (err) {
              throw err;
            }

            db.Users.update(
              { password: hash },
              {
                where: {
                  resetPasswordToken: req.params.token,
                  resetPasswordExpires: req.params.date
                },
                returning: true,
                plain: true
              }
            ).then(function(dbUsers) {
              console.log(dbUsers);
              if (dbUsers[1] === 1) {
                res.render("reset", { updated: "Password has been updated" });
                // res.json({
                //   success: true,
                //   message: "Users password has been updated"
                // });
              }
            });
          });
        });
      }
    });
  });
};
function parseToken(request, response, next) {
  console.log("hi"); //get auth header value
  var bearerHeader = request.headers["authorization"];
  console.log(bearerHeader);
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at the space
    var bearer = bearerHeader.split(" ");
    console.log(bearer);
    //get token from array
    var bearerToken = bearer[1];
    //set the token
    request.token = bearerToken;
    //Next middleware
    next();
  } else {
    //forbidden
    response.json({ message: "not logged in" });
  }
}
