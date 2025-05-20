// server.js - Advanced Version for "Find My Plug"

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

// Load env variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Mongoose Schema
const TripSchema = new mongoose.Schema({
  userId: String,
  carModel: String,
  carBrand: String,
  batteryLevel: Number,
  destination: String,
  createdAt: { type: Date, default: Date.now }
});

const Trip = mongoose.model('Trip', TripSchema);

// Routes

// Test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'API is running ✅' });
});

// Create trip
app.post('/api/trips', async (req, res) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create trip' });
  }
});

// Get all trips
app.get('/api/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trips' });
  }
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
