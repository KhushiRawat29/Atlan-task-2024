import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const itinerary = (() => {
    const itineraries = JSON.parse(localStorage.getItem('itineraries')) || [];
    return itineraries.find(itinerary => itinerary.id === parseInt(id));
  })();
  const [rating, setRating] = useState(0);

  const handleSave = () => {
    const savedItineraries = JSON.parse(localStorage.getItem('savedItineraries')) || [];
    savedItineraries.push(itinerary);
    localStorage.setItem('savedItineraries', JSON.stringify(savedItineraries));
    navigate('/dashboard');
  };

  const handleRate = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">{itinerary.title}</h2>
        <img src={itinerary.image} alt={itinerary.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <p className="text-gray-600 mb-4">{itinerary.description}</p>
        <p className="text-gray-600 mb-4"><strong>Location:</strong> {itinerary.location}</p>
        <p className="text-gray-600 mb-4"><strong>Budget:</strong> {itinerary.budget}</p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rate this itinerary:</label>
          <input type="number" value={rating} onChange={handleRate} min="1" max="5" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button onClick={handleSave} className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors duration-300">Save</button>
      </div>
    </div>
  );
};

export default ItineraryDetails;