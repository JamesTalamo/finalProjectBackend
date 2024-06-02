const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('message', MessageSchema)