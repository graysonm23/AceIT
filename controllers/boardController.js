const db = require("../models");

// Defining methods for the boardController
module.exports = {
  findAll: function(req, res) {
    db.Board.find(req.query)
      .then(dbBoardAll => res.json(dbBoardAll))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Board.findById(req.params.id)
      .then(dbBoardId => res.json(dbBoardId))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Board.create({
      label: req.body.label,
      icon: req.body.icon,
      background_color: req.body.background_color,
      border_color: req.body.border_color,
      rows: req.body.rows,
      cols: req.body.cols
    })
      .then(dbboardCreate => {
        console.log("This is res.body: ", res.body);
        console.log("This is req.body: ", req.body);
        console.log("This is dbModel: ", dbboardCreate);
        res.json(dbboardCreate);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Board.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbboardUpdate => res.json(dbboardUpdate))
      .catch(err => res.status(422).json(err));
  }
};
