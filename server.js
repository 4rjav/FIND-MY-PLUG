const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/findmyplug';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.static('public'));

app.get('/api/stations', (req, res) => {
  res.json([
    { name: "EV Station One", lat: 12.9716, lng: 77.5946 },
    { name: "EV Station Two", lat: 12.2958, lng: 76.6394 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
