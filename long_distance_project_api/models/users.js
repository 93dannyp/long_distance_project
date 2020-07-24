const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  level: { type: String, required: true },
  isLoggedIn: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
