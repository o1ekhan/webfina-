const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: 'New York',
        client_id: process.env.UNSPLASH_ACCESS_KEY,
      },
    });

    // Pass the fetched photos to your EJS template
    res.render('photos', { photos: response.data.results });
  } catch (error) {
    console.error('Error fetching data from Unsplash:', error);
    res.status(500).send('Error fetching photo data.');
  }
});

module.exports = router;