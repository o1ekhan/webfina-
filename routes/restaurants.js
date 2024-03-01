const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/restaurants', async (req, res) => {
  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
      params: {
        location: 'New York', // or use req.query to get user input
        categories: 'restaurants',
      },
    });

    // Pass the fetched restaurants to your EJS template
    res.render('restaurants', { restaurants: response.data.businesses });
  } catch (error) {
    console.error('Error fetching data from Yelp:', error);
    res.status(500).send('Error fetching restaurant data.');
  }
});

module.exports = router;
