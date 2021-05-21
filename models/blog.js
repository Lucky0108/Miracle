const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        unique: true
    },
    author: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
      min: 100  
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    blogPictures : {
        type: Array,
        data: Buffer,
        contentType: String,
        default: []
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString()
    },
    comments: {
        type: Array,
        default: []
    },
    tags: {
        type: Array,
        default: []
    }
},{ timestamps: true });


module.exports = mongoose.model("Blog", BlogSchema)