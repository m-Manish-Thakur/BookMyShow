const mongoose = require("mongoose");

const theaterSchema = mongoose.Schema({
  theaterName: String,
  capacity: Number,
  city: String
});

const Theater = mongoose.model("theater", theaterSchema);

module.exports = Theater;
