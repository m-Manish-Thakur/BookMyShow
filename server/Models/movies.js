const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  movieName: {
    type: String,
  },
  movieImg: {
    type: String,
  },
  rating: {
    type: String,
  },
  releaseDate: {
    type: Date
  },
  language: {
    type: String,
  },
  duration: {
    type: String,
  },
  aboutMovie: {
    type: String,
  },
  casts: [
    {
      img: String,
      castName: String,
      as: String
    },
  ],
  reviews: [
    {
      username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      rating: Number
    },
  ],
});


const Movies = mongoose.model("Movie", movieSchema);
module.exports  = Movies;