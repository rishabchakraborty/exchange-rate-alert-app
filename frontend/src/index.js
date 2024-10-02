const express = require('express');
const axios = require('axios');
const db = require('./firebase');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());

// Fetch exchange rates from the Bank of Canada API
app.get('/api/exchange-rates', async (req, res) => {
  try {
    // Bank of Canada API URL to fetch USD to CAD exchange rate
    const response = await axios.get('https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json');
    
    // Extract the observations (exchange rate data)
    const observations = response.data.observations;
    
    // Extract rates and dates for the response to the frontend
    const rates = observations.map(obs => parseFloat(obs.FXUSDCAD.v));
    const dates = observations.map(obs => obs.d);
    
    // Send the formatted data to the frontend
    res.json({ dates, rates });
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.status(500).send('Error fetching exchange rates');
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
