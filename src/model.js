const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    userName: String,
    email: String,
    password: String,
    university: String,
    degree: String,
    result: Array
    
}, "Users");

module.exports = {
    Users
}