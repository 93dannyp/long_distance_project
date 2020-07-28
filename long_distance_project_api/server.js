const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();

const sessionController = require("./controllers/sessions_controller.js");
const trainingController = require("./controllers/training_controller.js");
const userController = require("./controllers/users_controller.js");

//Port

const PORT = process.env.PORT;

//Database
const mongodbURI = process.env.MONGODB_URI;


// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

const cors = require("cors");

const whitelist = ["http://localhost:3000"];
//".herokuapp.com" -- add back later
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

//Controllers
app.use("/training", trainingController);
app.use("/users", userController);
app.use("/sessions", sessionController);

app.listen(PORT, () => {
  console.log("Magic on port", PORT, "!");
});
