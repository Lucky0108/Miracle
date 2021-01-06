const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    tags: [
        {   type: String    }
    ],
    blog: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    blogPictures : [
        { img: { type: String } }
    ],
    date: {
        type: Date,
        default: Date.now()
    }
},{ timestamps: true });


module.exports = mongoose.model("Blog", BlogSchema)