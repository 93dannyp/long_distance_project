const express = require("express");
const User = require("../models/users");
const sessionsRouter = express.Router();

//Upon submission of the log-in form check for username
sessionsRouter.post("/", (req, res) => {
  User.findOne({ username: req.body.username }, (error, foundUser) => {
    //Check for an error in the query
    if (error) {
      res.status(400).json({ Error: error.message });
    } else if (!foundUser) {
      console.log("in the !foundUser condition", error);
      //if user isn'found in db. Re-direct and message.
      res.status(400).json({ error });
    } else if (req.body.username === foundUser.username) {
      //If username matches
      res.status(200).send(foundUser);

      console.log("Welcome", foundUser);
    } else {
      res.status(400).json({ error: error.message });
    }
  });
});

//PUT route for logging in. I don't know the ID though.
sessionsRouter.put("/", (req, res) => {
  User.findOne(req.body, async (error, foundUser) => {
    if (error) {
      res.status(400).json({ Error: error.message });
    } else {
      console.log("got into the good place");
      console.log("founduser1", foundUser);
      foundUser.isLoggedIn = true;
      foundUser = await foundUser.save();
      console.log("founduser2", foundUser);
      res.status(200).send(foundUser);
    }
  });
});

//DELETE route for logging out
sessionsRouter.delete("/:id", (err, logOut) => {
  if (err) {
    res.status(400).json({ error: err.message });
  }
  res.status(200).json(logOut);
});

module.exports = sessionsRouter;
