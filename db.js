import mongoose from 'mongoose'

// Your connection string looks correct now!
const mongooseUrl = process.env.DB_URL

// REMOVED: useNewUrlParser and useUnifiedTopology
mongoose.connect(mongooseUrl)

const db = mongoose.connection

db.on('connected', () => {  
    console.log("database is connected")
})

db.on('error', (err) => {
    console.error("MongoDB connection error:", err)
})

export default db