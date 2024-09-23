import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItineraryDisplay = ({ itineraries, onSave, onRate }) => {
  const navigate = useNavigate();

  const handleSave = (itinerary) => {
    onSave(itinerary);
    navigate('/dashboard');
  };

  return (
    <div>
      {itineraries.map(itinerary => (
        <div key={itinerary.id} className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 mb-4">
          <img src={itinerary.image} alt={itinerary.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">{itinerary.title}</h3>
          <p className="text-gray-600 mb-4">{itinerary.description}</p>
          <p className="text-gray-600 mb-4"><strong>Location:</strong> {itinerary.location}</p>
          <p className="text-gray-600 mb-4"><strong>Budget:</strong> {itinerary.budget}</p>
          <button onClick={() => handleSave(itinerary)} className="mt-4 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors duration-300">Save</button>
          <button onClick={() => onRate(itinerary)} className="mt-4 ml-4 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-300">Rate</button>
        </div>
      ))}
    </div>
  );
};

export default ItineraryDisplay;