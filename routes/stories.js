const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/stories', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYTIMES_API_KEY}`);

    // Pass the fetched stories to your EJS template
    res.render('stories', { stories: response.data.results });
  } catch (error) {
    console.error('Error fetching data from NYT:', error);
    res.status(500).send('Error fetching story data.');
  }
});

module.exports = router;
