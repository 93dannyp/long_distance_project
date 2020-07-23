const mongoose = require('mongoose')

const trainingDaySchema = mongoose.Schema({
    distance: {type: String, required: true},
})

module.exports = mongoose.model('Training Day', trainingDaySchema)