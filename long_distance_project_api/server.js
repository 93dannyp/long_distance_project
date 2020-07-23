const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const trainingController = require('./controllers/training_controller.js')



// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/training', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json()); 

const cors = require('cors')
const whitelist = ['http://localhost:3000', '.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
    } else {
        callback(new Error('Not allowed by CORS'))
    }
    }
}
app.use(cors(corsOptions)) 


app.use('/training', trainingController)


app.listen(PORT, () => {
    console.log('Magic on port', PORT, '!',)
})