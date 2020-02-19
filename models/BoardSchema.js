const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema({
	label: String, //need to set default vals
	icon: String, //need to set default vals
	phrase: String,
	background_color: String, //need to set default vals
    border_color: String, //need to set default vals
    home: Boolean,
	buttons: [{type: Schema.Types.ObjectId, ref: "button"}],
	rows: Number,
	cols: Number,
	
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;