const db = require("../models");

// Defining methods for the UserController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUserAll => res.json(dbUserAll))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUserId => res.json(dbUserId))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(email) {
    return new Promise(function(resolve, reject) {
      console.log(email);
      db.User.findOne({ email: email }).exec(function(err, dbFindEmail) {
        if (err) {
          reject(err);
        }
        console.log(dbFindEmail);
        resolve(dbFindEmail);
      });
    });
  },
  create: function(name, email, hash, res) {
    db.User.create({
      name: name,
      email: email,
      password: hash,
      new_user: true
    })
      .then(dbUserCreate => {
        console.log("This is dbModel: ", dbUserCreate);
        return dbUserCreate;
      })
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUserUpdate => {
        console.log(dbUserUpdate);
        res.json(dbUserUpdate);
      })
      .catch(err => res.json("user did not update"));
  }
};
