const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, 
    email: String,
    password:   String,
    new_user: Boolean,
    profile_pic: String,
    boards: [{type: Schema.Types.ObjectId, ref: "board"}]});

const User = mongoose.model("User", userSchema);

module.exports = User;
