import 'dotenv/config'

import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'

import {eventsRouter} from './routes/eventsRouter.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/events', eventsRouter)

app.use((_, res) => {
    res.status(404).json({message: 'Route not found'})
})

app.use((err, req, res, next) => {
    const {status = 500, message = 'Server Error'} = err
    res.status(status).json({message})
})


app.listen(8080, () => {
    console.log('Server start on port 8080')

    mongoose.connect(process.env.DB_URI)
        .then(() => {
            console.log("Database connect successful");
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
})