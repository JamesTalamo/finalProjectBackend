const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('Connected to mongodb ')

    } catch (error) {
        console.log("Connection Failed" + error.message)
    }
}

module.exports = connectDB
