const express = require("express");
const training = express.Router();
const Training = require("../models/trainingDay.js");
const User = require("../models/users.js");

const isAuthenticated = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect("/sessions/new");
};

// Routes
// Index Route -- add back isAuthenticated
// Index Route
// isAuthenticated privents history.jsx from rendring
//when isAuthenticated is deleted history.jsx renders
training.get("/", (req, res) => {
  Training.find({}, (err, foundTraining) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundTraining);
  });
});


// Creat Route -- // possible we need _id here.

training.post("/", (req, res) => {
  User.findById(req.body.currentUserId, (err, foundUser) => {
    console.log(foundUser);
    Training.create(req.body, (error, createdTraining) => {
      foundUser.trainingHistory.push(createdTraining);
      foundUser.save((err, data) => {
        if (error) {
          res.status(400).json({ error: error.message });
        }
        res.status(200).send(createdTraining);
      });
    });
  });
});

// Update Route -- add back isAuthenticated
training.put("/:id", (req, res) => {
  Training.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTraining) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedTraining);
    }
  );
});


// Delete Route
// taking out isAuthenticated gave us the ability to delete training workout from database

training.delete("/:id", (req, res) => {
  Training.findByIdAndRemove(req.params.id, (err, deletedTraining) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedTraining);
  });
});
module.exports = training;
