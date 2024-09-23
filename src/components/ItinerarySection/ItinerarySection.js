import React from 'react';
import { Link } from 'react-router-dom';

const ItinerarySection = ({ itineraries, maxVisible = 3 }) => {
  const visibleItineraries = itineraries.slice(0, maxVisible);

  return (
    <div className="rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItineraries.length > 0 && visibleItineraries.map(itinerary => (
          <div key={itinerary.id} className="w-full p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ aspectRatio: '4 / 3' }}>
            <div className="h-3/4">
              <img src={itinerary.image} alt={itinerary.title} className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-2">
              <h5 className="text-lg font-bold pb-1">{itinerary.title}</h5>
              <p className="text-sm"><strong>Location:</strong> {itinerary.location}</p>
              <h4 className="text-md font-semibold"><strong>Budget:</strong> {itinerary.budget}</h4>
              <Link to={`/itinerary/${itinerary.id}`} className="text-blue-500 pb-4 inline-block">more...</Link>
            </div>
          </div>
        ))}
      </div>
      {itineraries.length > maxVisible && (
        <div className="mt-4 text-center">
          <Link to="/all-itineraries" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-300">
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItinerarySection;