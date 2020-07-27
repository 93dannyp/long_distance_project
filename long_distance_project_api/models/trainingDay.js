const mongoose = require("mongoose");

const trainingDaySchema = new mongoose.Schema({
  title: { type: String, required: true },
  distance: { type: Number, default: 0 },
  time: { type: Number, default: 0 },
  week: { type: Number, default: 0 },
  day: { type: Number, default: 0 },
});

const Training = mongoose.model("TrainingDay", trainingDaySchema);
module.exports = Training;
