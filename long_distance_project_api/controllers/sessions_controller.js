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

//PUT route for logging out. -- WITH ID -- NOT WORKING, MOVING ON
sessionsRouter.put("/:id", (req, res) => {
  console.log("in sessions controller", req.params);
  const foundUser = User.findById(req.params.id);
  console.log(foundUser);
  // then run some kind of function with the code below using async -- make this run somehow

  //foundUser is returning some mad data. There is the start of your issue
  const logOut = async () => {
    console.log("route 2");
    if (error) {
      res.status(400).json({ Error: error.message });
    } else {
      console.log("founduser1", foundUser);
      foundUser.isLoggedIn = false;
      foundUser = await foundUser.save();
      console.log("founduser2", foundUser);
      res.status(200).send(foundUser);
    }
    logOut();
  };
  // User.findById(req.params.id, async (error, foundUser) => {
  //   console.log("route 2");
  //   if (error) {
  //     res.status(400).json({ Error: error.message });
  //   } else {
  //     console.log("founduser1", foundUser);
  //     foundUser.isLoggedIn = false;
  //     foundUser = await foundUser.save();
  //     console.log("founduser2", foundUser);
  //     res.status(200).send(foundUser);
  //   }
  // });
});

//PUT route for logging in. -- NO ID
sessionsRouter.put("/", (req, res) => {
  User.findOne(req.body, async (error, foundUser) => {
    if (error) {
      res.status(400).json({ Error: error.message });
    } else {
      // console.log("got into the good place");
      foundUser.isLoggedIn = true;
      foundUser = await foundUser.save();
      res.status(200).send(foundUser);
    }
  });
});

//DELETE route for logging out
// sessionsRouter.delete("/:id", (err, logOut) => {
//   User.findById({})
//   if (err) {
//     res.status(400).json({ error: err.message });
//   }
//   res.status(200).json(logOut);
// });

module.exports = sessionsRouter;
