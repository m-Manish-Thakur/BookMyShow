const express = require('express');
const router = express.Router();
const User = require('../Models/user');

// Add this line to parse JSON data
router.use(express.json());

router.post('/register', async (req, res)=> {  
    const { username, email, password } = req.body;
    const newUser = await User.create({
        username,
        email,
        password
    })

    res.json(newUser);
})

module.exports = router