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
  findByEmail: function(req, res){
    db.User.find({email: req.body.email}, function(dbFindEmail){
      res.json(dbFindEmail);
    })
  },
  create: function(req, res, hash) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      new_user: true
    })
      .then(dbUserCreate => {
        console.log("This is res.body: ", res.body);
        console.log("This is req.body: ", req.body);
        console.log("This is dbModel: ", dbUserCreate);
        res.json(dbUserCreate);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUserUpdate => res.json(dbUserUpdate))
      .catch(err => res.status(422).json(err));
  }
};
