const express = require("express");
const bcrypt = require("bcrypt");
const users = express.Router();
const User = require("../models/users.js");

const isAuthenticated = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect("/sessions/new");
};
//Create a new user
users.get("/new", (req, res) => {
  User.find({}, (err, foundUser) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundUser);
  });
});

//Post that new user to the db?
users.post("/", async (req, res) => {
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
  );
  User.create(req.body, (err, createdUser) => {
    console.log("user is created", createdUser);
    if (err) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdUser);
  });
  res.redirect("/training");
});

//Update the user's profile
users.put("/:id", isAuthenticated, (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedUser);
    }
  );
});

module.exports = users;
