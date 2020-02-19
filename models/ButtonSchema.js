const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buttonSchema = new Schema({
	label: String, //need to set default vals
	icon: String, //need to set default vals
    phrase: String,
    link: String,
	background_color: String, //need to set default vals
	border_color: String, //need to set default vals
	boards: [{type: Schema.Types.ObjectId, ref: "boards"}],
});


const Button = mongoose.model("Button", buttonSchema);

module.exports = Button;