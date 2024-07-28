import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mongoConnect } from './config/mongoConnection.js';
import router from './routes/index.js';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()
const port = process.env.PORT || 9000

/** Resolving dirname for ES MODULE */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* CONFIG */
dotenv.config();
mongoConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

app.use(express.static(path.join(__dirname, 'client/dist')))

// Render client for any path
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})