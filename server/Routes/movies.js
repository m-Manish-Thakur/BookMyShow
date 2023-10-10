const express = require("express");
const router = express.Router();
const Movies = require("../Models/movies");
const Theater = require("../Models/theater");
const ShowTime = require("../Models/showTime");

// Add this line to parse JSON data
router.use(express.json());

router.post("/", async (req, res) => {
  const { movieName, movieImg, rating, language, duration, aboutMovie, casts } =
    req.body;

  const movie = await Movies.create({
    movieName,
    movieImg,
    rating,
    language,
    duration,
    aboutMovie,
    casts,
  });

  res.json(movie);
});
 
// Get movies available in a specific city
router.get("/:city", async (req, res) => {
  const city = req.params.city;
  console.log(city);
  try {
    const theatersInCity = await Theater.find({ city: city });
    const theaterIds = theatersInCity.map((theater) => theater._id);
    const moviesInCity = await ShowTime.find({ theater: { $in: theaterIds } })
    .populate('movie'); 

    console.log(moviesInCity);
    res.json(moviesInCity)

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching movies" });
  }
});

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movies.find({});
    res.json(movies);
  } catch (err) {
    res.json({ Msg: "Data not Found" });
  }
});

module.exports = router;
