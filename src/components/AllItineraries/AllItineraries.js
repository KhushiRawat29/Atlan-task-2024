import React from 'react';
import { Link } from 'react-router-dom';

const AllItineraries = ({ itineraries }) => {
  return (
    <div className="min-h-screen bg-white p-10">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">All Itineraries</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {itineraries.length > 0 && itineraries.map(itinerary => (
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
      </div>
    </div>
  );
};

export default AllItineraries;