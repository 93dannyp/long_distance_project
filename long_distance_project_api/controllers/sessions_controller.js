const express = require("express");
const User = require("../models/users");
const sessionsRouter = express.Router();

//NO INDEX ROUTE NEEDED

sessionsRouter.post("/", (req, res) => {
  if (User.findOne(req.params.username)) {
    alert("Username is taken, please try another one");
  } else {
    //Check to see if the user exists first -- Can you put to database searches in one call? User.findOne({ username: req.body.username }, (err, foundUser) => { if(foundUser) { res.send("Username already exists. Choose another one")} else ...see below}
    User.create(req.body, (error, createdUser) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).send(createdUser);
    });
  }
});

//DELETE route for logging out
sessionsRouter.delete("/:id", (err, logOut) => {
  if (err) {
    res.status(400).json({ error: err.message });
  }
  res.status(200).json(logOut);
});

module.exports = sessionsRouter;
