const express = require("express");
// const bcrypt = require("bcrypt");
const users = express.Router();
const User = require("../models/users.js");

const isAuthenticated = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect("/sessions");
};

//NO INDEX ROUTE NEEDED FOR USERS

// CREATE ROUTE
users.post("/", async (req, res) => {
  User.create(req.body, (error, createdUser) => {
    console.log("user is created", createdUser);
    if (error) {
      res.status(400).json({ error: "username already created" });
    }
    res.status(200).send(createdUser);
  });
});

//Update the user's profile -- should I add isAuthenticated?
users.put("/:id", (req, res) => {
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

//NO DELETE ROUTE NEEDED

module.exports = users;
