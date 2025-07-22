import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import setMiddleware from './middleware/index.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
setMiddleware(app);
// Routes
app.use('/api', authRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
