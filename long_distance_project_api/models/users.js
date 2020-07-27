const mongoose = require("mongoose");
const Training = require("./trainingDay.js");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  level: { type: String, required: true },
  isLoggedIn: { type: Boolean, default: false },
  trainingHistory: [Training.schema],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
