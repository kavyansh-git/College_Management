const mongoose = require("mongoose");

const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    // 1. Playlist mein songs kaunse hain
    // 2. Playlist Collaborators
    songs: [
        {
        type: mongoose.Types.ObjectId,
        ref: "Song",   
        }
    ],
    collaborators: [
        {
        type: mongoose.Types.ObjectId,
        ref: "User ",   
        }
    ],

});

const playlistModel = mongoose.model("Playlist", Playlist);

module.exports = playlistModel;