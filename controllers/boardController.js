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
      label: req.label,
      icon: req.boardIcon,
      background_color: req.background_color,
      border_color: req.border_color,
      rows: req.rows,
      cols: req.cols
    })
      .then(dbboardCreate => {
        console.log("This is res.body: ", res.body);
        console.log("This is req.body: ", req.body);
        console.log("This is dbModel: ", dbboardCreate);
        return dbboardCreate;
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Board.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbboardUpdate => res.json(dbboardUpdate))
      .catch(err => res.status(422).json(err));
  }
};
