const mongoose = require("mongoose");

const showTimeSchema = mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theater",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
  },
  price: {
    type: String
  }
});

const ShowTime = mongoose.model("showTime", showTimeSchema);

module.exports = ShowTime;