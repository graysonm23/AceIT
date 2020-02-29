const db = require("../models");

// Defining methods for the ButtonController
module.exports = {
  findAll: function(req, res) {
    db.Button.find(req.query)
      .then(dbButtonAll => res.json(dbButtonAll))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Button.findById(req.params.id)
      .then(dbButtonId => res.json(dbButtonId))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Button.create({
      label: req.body.label,
      icon: req.body.icon,
      background_color: req.body.background_color,
      border_color: req.body.border_color
    })
      .then(dbButtonCreate => {
        console.log("This is res.body: ", res.body);
        console.log("This is req.body: ", req.body);
        console.log("This is dbModel: ", dbButtonCreate);
        res.json(dbButtonCreate);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Button.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbButtonUpdate => res.json(dbButtonUpdate))
      .catch(err => res.status(422).json(err));
  }
};
