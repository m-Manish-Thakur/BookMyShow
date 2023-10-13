const express = require("express");
const router = express.Router();
const Movies = require("../Models/movies");
const Theater = require("../Models/theater");
const ShowTime = require("../Models/showTime");

// Add this line to parse JSON data
router.use(express.json());

// Create Theater  -------------------------
router.post("/", async (req, res) => {
  const { theaterName, capacity, city } = req.body;
  const theater = await Theater.create({
    theaterName,
    capacity,
    city,
  });

  res.json(theater);
});

// Get theater names and showtimes for a specific movie
router.get("/movie/:movieId", async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const movie = await Movies.findById(movieId);
    const theaters = await Theater.find({});
    const theaterDetails = [];

    for (const theater of theaters) {
      const showtimes = await ShowTime.find({ theater: theater._id, movie: movieId });
      if (showtimes.length > 0) {
        theaterDetails.push({
          theater: theater,
          showtimes: showtimes,
        });
      }
    }

    res.json({theaterDetails:theaterDetails, movie: movie});
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error fetching theater names and showtimes" });
  }
});

// Get all Theaters  -------------------------
router.get("/", async (req, res) => {
  try {
    const theater = await Theater.find({});
    res.json(theater);
  } catch (err) {
    res.json({ Msg: "Data not found" });
  }
});

module.exports = router;
