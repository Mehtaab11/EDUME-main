import express from 'express';
import cors from 'cors';
import 'dotenv/config'


// Initialise Express

const app = express()

// middlewares

app.use(cors())


// Routes

app.get('/', (req, res) => res.send("Api Working"))


// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
