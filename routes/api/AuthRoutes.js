const router = require("express").Router();
const userController = require("../../controllers/userController");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Matches with "/api/auth"
router
  .route("/api")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/auth/:id"
// router
//   .route("/api/auth/:id")
//   .all(function(req, res, next) {
//     jwt.verify(req.token, process.env.SECRET_KEY, function(err, authData) {
//       if (err) {
//         res.status(403); //forbidden error
//         console.log(err);
//       } else {
//         next();
//       }
//     });
//   })
//   .get(parseToken, function(req, res) {
//   userController.findById(req.body.id, res, function(dbUserId){
//     res.json(dbUserId);
//   })
//   })
//   .put(userController.update)

router.route("/api/auth/signin").post(async (req, res) => {
  const email = req.body.email;
  const user = await userController.findByEmail(email);
  console.log("signing in");
  console.log(email);
  console.log("user", user);
  if (user) {
    //if account exists
    bcrypt.compare(req.body.password, user.password, function(
      //compare hashed password
      err,
      response
    ) {
      if (err) {
        return res.json({
          success: false,
          message: "passwords do not match"
        });
      }
      if (response) {
        //if passwords match
        // res.json(dbUsers);
        var userid = user._id;
        console.log(user);
        jwt.sign(
          { userid: userid },
          process.env.SECRET_KEY,
          { expiresIn: "10 days" } /*sets token to expire in 30 seconds*/,
          function(err, token) {
            console.log(err);
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

router.route("/api/auth/signup").post(function(req, res) {
  console.log(req.body);
  const myPlaintextPassword = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
      if (err) {
        throw err;
      }
      console.log(hash);
      userController.create(name, email, hash);
    });
  });
});

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

module.exports = router;
