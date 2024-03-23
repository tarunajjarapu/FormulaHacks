const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
        console.log(`MongoDB Connected:`)
    } catch (error) {
        console.log(error)
        setTimeout(connectDB, 5000)
    }
}

module.exports = { connectDB }