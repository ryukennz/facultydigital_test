import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mongoConnect } from './config/mongoConnection.js';
import router from './routes/index.js';

const app = express()
const port = process.env.PORT || 9000

/* CONFIG */
dotenv.config();
mongoConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})