import mongoose, { mongo } from "mongoose";
import nodemon from "nodemon";
import express from 'express';
import cors from 'cors'




const app = express()

app.use(express.json())
app.use(cors())


app.listen(5000, () => {
    console.log('server running at https://localhost:5000')
})

mongoose.connect('https://localhost:5000')