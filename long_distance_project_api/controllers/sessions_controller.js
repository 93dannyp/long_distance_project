const express = require("express");
const User = require("../models/users");
const sessionsRouter = express.Router();

//NO INDEX ROUTE NEEDED

//Upon submission of the log-in form ...
sessionsRouter.post("/", (req, res) => {
  //see if the username exists in the data base.
  //if it doesn't, send an alert that that name doesn't exist
  //if it does, continue with the fetch track below

  User.findOne({ username: req.body.username }, (err, foundUser) => {
    //Check for an error in the query
    if (err) {
      console.log(err);
      alert("Something bad happened in the database");
    } else if (!foundUser) {
      //if user isn'found in db. Re-direct and message.
      console.log(req.body.username);
      console.log("Sorry, user not found."); // leave as req.body.username?
    } else if (req.body.username === foundUser.username) {
      //If username matches
      req.session.currentUser = foundUser;
      foundUser.isLoggedIn = true;
      console.log("Welcome", foundUser);
    } else {
      console.log("some mysterious 4th thing happened");
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
