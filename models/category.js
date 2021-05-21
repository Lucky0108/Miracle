const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        unique: true
    },
    blogs: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Category", CategorySchema)
