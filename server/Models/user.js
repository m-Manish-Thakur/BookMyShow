const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    type: {
        type: String,
        default: 'user'
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;