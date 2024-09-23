
import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const UserPreferencesForm = ({ onSubmit }) => {
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [companions, setCompanions] = useState('');
  const [activityType, setActivityType] = useState('');
  const [transportation, setTransportation] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget || !interests || !duration || !location || !companions || !activityType || !transportation) {
      setError('All fields are required.');
      return;
    }
    setError('');
    onSubmit({ budget, interests, duration, location, companions, activityType, transportation });
    navigate('/user-type-selection');
  };
  const interestOptions = [
    { value: 'beaches', label: 'Beaches' },
    { value: 'mountains', label: 'Mountains' },
    { value: 'cities', label: 'Cities' },
    { value: 'deserts', label: 'Deserts' },
    { value: 'forests', label: 'Forests' },
    { value: 'lakes', label: 'Lakes' },
    { value: 'rivers', label: 'Rivers' },
    { value: 'historical sites', label: 'Historical Sites' },
    { value: 'museums', label: 'Museums' },
    { value: 'adventure sports', label: 'Adventure Sports' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'nightlife', label: 'Nightlife' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'food and drink', label: 'Food and Drink' },
    { value: 'cultural experiences', label: 'Cultural Experiences' },
    { value: 'festivals', label: 'Festivals' },
    { value: 'art and galleries', label: 'Art and Galleries' },
    { value: 'music', label: 'Music' },
    { value: 'theater', label: 'Theater' },
    { value: 'spa and wellness', label: 'Spa and Wellness' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'skiing', label: 'Skiing' },
    { value: 'diving', label: 'Diving' },
    { value: 'cruises', label: 'Cruises' },
    { value: 'road trips', label: 'Road Trips' },
    { value: 'photography', label: 'Photography' },
    { value: 'bird watching', label: 'Bird Watching' },
    { value: 'gardens', label: 'Gardens' },
    { value: 'architecture', label: 'Architecture' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-700">Budget</label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter your budget (e.g., 10000)" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Interests</label>
        <Select
          isMulti
          value={interests}
          onChange={setInterests}
          options={interestOptions}
          className="mt-1 block w-full"
          classNamePrefix="select"
          placeholder="Select your interests"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Trip Duration</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter trip duration (e.g., 7 days)" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          <option value="">Select a location</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Australia">Australia</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Travel Companions</label>
        <select value={companions} onChange={(e) => setCompanions(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          <option value="">Select number of companions</option>
          <option value="1">1</option>
          <option value="2-4">2-4</option>
          <option value="5-10">5-10</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Activity Type Preferences</label>
        <select value={activityType} onChange={(e) => setActivityType(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          <option value="">Select activity type</option>
          <option value="adventure">Adventure</option>
          <option value="cultural">Cultural</option>
          <option value="relaxation">Relaxation</option>
          <option value="nightlife">Nightlife</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Transportation Preferences</label>
        <select value={transportation} onChange={(e) => setTransportation(e.target.value)} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
          <option value="">Select transportation mode</option>
          <option value="flight">Flight</option>
          <option value="cruise">Cruise</option>
          <option value="road trip">Road Trip</option>
        </select>
      </div>
      <button type="submit" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition-colors duration-300">Generate Itinerary</button>
    </form>
  );
};

export default UserPreferencesForm;