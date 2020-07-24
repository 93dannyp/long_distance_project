const mongoose = require('mongoose')

const trainingDaySchema = mongoose.Schema({
    title: {type: String, required: true},
    distance: {type: Number, default: 0},
    time: {type: Number, default: 0},
    week: {type: Number, default: 0},
    day: {type: Number, default: 0}
})

module.exports = mongoose.model('TrainingDay', trainingDaySchema)

