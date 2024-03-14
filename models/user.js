const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Other user properties like profile picture, bio, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
