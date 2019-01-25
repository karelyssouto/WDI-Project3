const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema({
    img: String,
    description: String
})

module.exports = mongoose.model('Post', Post)