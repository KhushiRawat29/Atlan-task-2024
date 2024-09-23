import React from 'react';
import { useParams } from 'react-router-dom';
import itinerariesData from '../itineraries.json';

const ItineraryItem = () => {
  const { id } = useParams();
  const itinerary = itinerariesData.find(itinerary => itinerary.id === parseInt(id));

  if (!itinerary) {
    return <div>Itinerary not found</div>;
  }

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <img src={itinerary.image} alt={itinerary.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{itinerary.title}</h3>
      <p className="text-gray-600 mb-4">{itinerary.description}</p>
      <p className="text-gray-600 mb-4"><strong>Location:</strong> {itinerary.location}</p>
      <p className="text-gray-600 mb-4"><strong>Budget:</strong> {itinerary.budget}</p>
      <div className="flex space-x-4">
        <button onClick={() => onRate(itinerary)} className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-colors duration-300">Rate</button>
        <button onClick={() => onSave(itinerary)} className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-300">Save</button>
      </div>
    </div>
  );
};

export default ItineraryItem;