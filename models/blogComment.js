const mongoose = require('mongoose');

const blogCommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
        min:5,
        max:500
    },
    website: {
        type: String
    },
    name: {
        type: String,
        required: true,
        min:2,
        max:20
    },
    email: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model("Blog Comment", blogCommentSchema);