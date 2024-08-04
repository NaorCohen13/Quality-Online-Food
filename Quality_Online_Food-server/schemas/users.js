const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
});

module.exports = mongoose.model('User', userSchema);
