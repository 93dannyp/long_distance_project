const express = require("express");
const User = require("../models/users");
const sessionsRouter = express.Router();
const bcrypt = require("bcrypt");

// sessionsRouter.get("/", (req, res) => {
//     User.find({}, )
//   // res.render('sessions/new.ejs', {
//   // currentUser: req.session.currentUser,
//   // });
// });

sessionsRouter.post("/", (req, res) => {
  //Check to see if the user exists
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    //Check for an error in the query
    //MAY NEED TO RECONFIGURE SOME OF THIS NOW THAT IT'S GOING THROUGH REACT
    if (err) {
      console.log(err);
      res.send("Something bad happened in the database");
    } else if (!foundUser) {
      //if user isn'found in db. Re-direct and message.
      res.send("<a href='/training/'>Sorry, user not found.</a>");
    } else {
      //User exists and the passwords can be compared
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //If passwords match
        req.session.currentUser = foundUser;
        res.redirect("/training");
      } else {
        //Let them know if the password is incorrect
        res.send('<a href="/training">Incorrect password.</a>');
      }
    }
  });
});

//DELETE route for logging out
sessionsRouter.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/training");
  });
});

module.exports = sessionsRouter;
