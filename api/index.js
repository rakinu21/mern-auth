import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import path from 'path';

// Load environment variables
dotenv.config();

const app = express();

// Define the directory name (__dirname) for ES modules
const __dirname = path.resolve();

// Middleware for parsing JSON, cookies, and URL-encoded data
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '/client/dist')));

// API routes
app.use('/api/auth', authRouter);

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  try {
    await connectDb();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
});