import mongoose from 'mongoose'
import dotenv from 'dotenv'

// This line loads the variables from .env into process.env
dotenv.config(); 

const mongooseUrl = process.env.DB_URL

// Now mongooseUrl will be your string instead of "undefined"
mongoose.connect(mongooseUrl)

const db = mongoose.connection

db.on('connected', () => {  
    console.log("database is connected")
})

db.on('error', (err) => {
    console.error("MongoDB connection error:", err)
})

export default db