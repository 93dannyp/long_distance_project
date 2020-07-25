const express = require("express");
const training = express.Router();

const Training = require("../models/trainingDay.js");

const isAuthenticated = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect("/sessions/new");
};

// Routes
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

// Creat Route
training.post("/", (req, res) => {
  Training.create(req.body, (error, createdTraining) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdTraining);
  });
});

// Update Route
training.put("/:id", isAuthenticated, (req, res) => {
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
training.delete("/:id", isAuthenticated, (req, res) => {
  Training.findByIdAndRemove(req.params.id, (err, deletedTraining) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedTraining);
  });
});
module.exports = training;
