import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import clerWebhooks from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express'; // ✅ Correct import

// Initialise Express
const app = express();

// Connecting to database
await connectDB();

// Middlewares (Ensure Correct Order)
app.use(clerkMiddleware());  // ✅ Clerk authentication
app.use(express.json());  // ✅ JSON parser
app.use(cors());

// Debug Middleware to log `req.auth`
app.use((req, res, next) => {
    console.log("Middleware Debug: req.auth", req.auth);
    next();
});

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.post('/clerk', clerWebhooks);
app.use('/api/educator', educatorRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
