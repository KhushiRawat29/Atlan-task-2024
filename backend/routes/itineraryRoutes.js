const express = require('express');
const { createItinerary, getItineraries } = require('../controllers/itineraryController');

const router = express.Router();

router.post('/', createItinerary);
router.get('/:userId', getItineraries);

module.exports = router;