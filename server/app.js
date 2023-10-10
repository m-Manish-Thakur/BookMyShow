const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes ------------------------
const userRoute = require("./Routes/user");
const moviesRoute = require("./Routes/movies");
const cityRoute = require("./Routes/city");
const theaterRoute = require('./Routes/theater')
const showTime = require('./Routes/showTime');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/movies", moviesRoute);
app.use("/city", cityRoute);
app.use("/theater", theaterRoute);
app.use("/showTime", showTime);

app.get("/", (req, res) => {
  res.json("Welcome to BookmyShow");
});

//  Port and MongoDB Connection

app.listen(8000, () => {
  console.log("Server Started");
  mongoose
    .connect("mongodb://localhost:27017/bookmyshow", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
