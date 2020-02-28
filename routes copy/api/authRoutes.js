const router = require("express").Router();
const userController = require("../../controllers/userController");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Matches with "/api/auth"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/auth/:id"
router
  .route("/api/auth/:id")
  .all(function(req, res, next) {
    jwt.verify(req.token, process.env.SECRET_KEY, function(err, authData) {
      if (err) {
        res.status(403); //forbidden error
        console.log(err);
      } else {
        next();
      }
    });
  })
  .get(parseToken, function(req, res) {
  userController.findById(req.body.id, res, function(dbUserId){
    res.json(dbUserId);
  })
  })
  .put(userController.update)
  .delete(userController.remove);

  router.route("/api/auth/login")
  .post(function(req, res){
    
    async () => {
      
     const promise = userController.findByEmail;
     await promise;
    }
  
  })

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
