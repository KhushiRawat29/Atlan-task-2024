const Itinerary = require('../models/itineraryModel');

exports.createItinerary = async (req, res) => {
  try {
    const itinerary = new Itinerary(req.body);
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.params.userId });
    res.status(200).json(itineraries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};