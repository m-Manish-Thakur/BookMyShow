const express = require("express");
const router = express.Router();
const Cities = require("../Models/cities");

// Add this line to parse JSON data
router.use(express.json());

router.get("/", async (req, res) => {
  const cities = await Cities.find({});
  res.json(cities);
});

router.post("/", async (req, res) => {
    const { cityName, cityImg } = req.body;
    const city = await Cities.create({
        cityName,
        cityImg
    });

    res.json(city);

});

module.exports = router;
