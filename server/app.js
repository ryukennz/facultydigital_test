import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mongoConnect } from './config/mongoConnection.js';

/* CONFIG */
dotenv.config();
mongoConnect()
const app = express()
const port = process.env.PORT || 9000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})