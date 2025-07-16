import mongoose from "mongoose";
import dotenv from 'dotenv'

export const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB successfully connected:`)
    } catch (error) {
        console.error(error)
        console.log("MongoDB connected unsuccessfully", error)
        process.exit(1)
    }
}