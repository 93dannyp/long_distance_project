const express = require("express");
const User = require("../models/users");
const sessionsRouter = express.Router();

//NO INDEX ROUTE NEEDED

//Upon submission of the log-in form check for username
sessionsRouter.post("/", (req, res) => {
  User.findOne({ username: req.body.username }, (error, foundUser) => {
    //Check for an error in the query
    if (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    } else if (!foundUser) {
      console.log("in the !foundUser condition", error);
      //if user isn'found in db. Re-direct and message.
      // console.log(req.body.username);
      res.status(400).json({ error });
    } else if (req.body.username === foundUser.username) {
      //If username matches
      // foundUser.isLoggedIn = true;
      // foundUser.save
      res.status(200).send(foundUser);
      // req.session.currentUser = foundUser;

      console.log("Welcome", foundUser);
    } else {
      res.status(400).json({ error: error.message });
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
