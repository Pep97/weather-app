require('dotenv').config({ path: './api.env' });
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const apiUrl = process.env.UPI_URL;

    try {
        const response = await axios.get(`${apiUrl}${city}&appid=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});