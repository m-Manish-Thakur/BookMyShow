const express = require("express");
const router = express.Router();
const ShowTime = require('../Models/showTime');

// Add this line to parse JSON data
router.use(express.json());

router.get("/", async (req, res) => {
    res.json({msg: "Show Time"});
});

router.post("/", async (req, res) => {

    const { movie, theater, time, price } = req.body;
    const date = new Date(req.body.date);

    console.log( movie, theater, time, price, date);
    const show = await ShowTime.create({
        movie, 
        theater,
        date,
        time,
        price
    });

    res.json(show);
});

module.exports = router;
