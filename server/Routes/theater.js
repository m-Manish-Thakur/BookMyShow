const express = require("express");
const router = express.Router();
const Theater = require("../Models/theater");

// Add this line to parse JSON data
router.use(express.json());

router.get("/", async (req, res) => {
    try{
        const theater = await Theater.find({});
        res.json(theater);
    }catch(err){
        res.json({Msg: 'Data not found'})
    }

});

router.post("/", async (req, res) => {
  const { theaterName, capacity, city } = req.body;
  const theater = await Theater.create({
    theaterName,
    capacity,
    city,
  });

  res.json(theater)
});

module.exports = router;
