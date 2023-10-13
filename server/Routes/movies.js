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

    // Use distinct() to get unique movies based on theater IDs
    const movieIds = await ShowTime.distinct("movie", {
      theater: { $in: theaterIds },
    });

    // Fetch movie details using the distinct movie IDs
    const moviesInCity = await Movies.find({ _id: { $in: movieIds } });

    console.log(moviesInCity);
    res.json(moviesInCity);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching movies" });
  }
});

// Get Movie By ID
router.get("/movie/:movieId", async (req, res) => {
  const movieId = req.params.movieId;
  try {
    const movie = await Movies.find({ _id: movieId });
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    console.log(movie);
    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching movie details" });
  }
});

module.exports = router;
