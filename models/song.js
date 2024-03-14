const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: String,
    // Other song properties like duration, genre, release date, etc.
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
