const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const Contact = require('./models/Contact');
const ServiceRequest = require('./models/ServiceRequest');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected to', process.env.MONGODB_URI))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact request saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact request', details: error.message });
  }
});

app.post('/api/service-request', async (req, res) => {
  try {
    const { name, organization, country, email, phone, service, message } = req.body;
    const newRequest = new ServiceRequest({ name, organization, country, email, phone, service, message });
    await newRequest.save();
    res.status(201).json({ message: 'Service request saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save service request', details: error.message });
  }
});

app.get('/api/requests', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    const services = await ServiceRequest.find().sort({ createdAt: -1 });
    res.status(200).json({ contacts, services });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requests', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
