const mongoose = require('mongoose');

const  citySchema = mongoose.Schema({
    cityName: String,
    cityImg: String
});

const Cities = mongoose.model("city", citySchema);

module.exports = Cities;