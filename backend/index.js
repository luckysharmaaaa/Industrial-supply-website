import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

import contactRoutes from './routes/contactRoutes.js';
import productRoutes from './routes/productRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const app = express();

// 🔥 PORT for Render
const PORT = process.env.PORT || 5000;

// 🔥 Connect DB
connectDB();

// 🔥 Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 CORS (PRODUCTION SAFE)
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    credentials: true,
  })
);

// 🔥 Health check route (important for Render)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running successfully 🚀',
    timestamp: new Date().toISOString(),
  });
});

// 🔥 Routes
app.use('/api/contact', contactRoutes);
app.use('/api/products', productRoutes);
app.use('/api/blog', blogRoutes);

// 🔥 Error handlers
app.use(notFound);
app.use(errorHandler);

// 🔥 Start server (important for Render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});