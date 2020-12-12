const mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema({
    email: String,
    required: true,
    trim: true,
    unique: true
})

module.exports = mongoose.model("Newsletter", newsletterSchema)