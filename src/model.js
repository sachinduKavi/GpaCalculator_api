const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    userName: String,
    email: String,
    mobile: String,
    password: String,
    university: String,
    degree: String,
    result: Array
    
}, "Users");

module.exports = {
    Users
}