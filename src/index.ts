

import express, {  Application, Request, Response } from 'express';
import dotenv from "dotenv"
import {router} from "./routes/userRoutes";
import {errorHandler} from './middleware/errorHandler';
import cors from 'cors';

import './config/db'; // Ensures the database connection is established
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;


// Allow requests only 
const corsOptions = {
    origin:process.env.CLIENT ,
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors());

app.use(express.json()); // Middleware to parse JSON requests

// Use user routes
app.use('/api', router);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
