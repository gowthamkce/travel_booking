// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travelDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a Booking Schema
const bookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  gmail: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  }
});

// Create a model for the schema
const Booking = mongoose.model('Booking', bookingSchema);

// Define the POST route for form submissions
app.post('/api/booking', async (req, res) => {
  const { fullName, gmail, phoneNumber, arrivalDate } = req.body;

  const newBooking = new Booking({
    fullName,
    gmail,
    phoneNumber,
    arrivalDate
  });

  try {
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving booking', error: err });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
