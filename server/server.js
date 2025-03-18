import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import clerWebhooks from './controllers/webhooks.js';


// Initialise Express

const app = express()

// Connecting to database 
await connectDB()

// middlewares

app.use(cors())

// Routes

app.get('/', (req, res) => res.send("Api Working"))
app.post('/clerk', express.json(), clerWebhooks)


// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
