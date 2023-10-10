const express = require("express");
const router = express.Router();
const Movies = require("../Models/movies");

// Add this line to parse JSON data
router.use(express.json());

router.post("/", async (req, res) => {
  const { movieName, movieImg, rating, language, duration, aboutMovie, casts } = req.body;

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

router.get("/", async (req, res) => {
  try{
    const movies = await Movies.find({});
    res.json(movies);
  }catch(err){
    res.json({Msg: "Data not Found"})
  }

});

module.exports = router;
