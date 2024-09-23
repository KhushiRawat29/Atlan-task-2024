import React, { useEffect, useState } from 'react';
import { getItineraries } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = ({ user, itineraries, setItineraries }) => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email || '');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await getItineraries(user.userId, user.token);
        if (Array.isArray(response)) {
          setItineraries(response);
        } else {
          console.error('Expected an array of itineraries');
        }
      } catch (error) {
        console.error('Failed to fetch itineraries:', error);
      }
    };

    fetchItineraries();
  }, [user, setItineraries]);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSaveDetails = () => {
    // Implement the logic to save user details
    setEditMode(false);
  };

  const handleDelete = (id) => {
    const updatedItineraries = itineraries.filter(itinerary => itinerary.id !== id);
    setItineraries(updatedItineraries);
    localStorage.setItem('savedItineraries', JSON.stringify(updatedItineraries));
  };

  const handleView = (id) => {
    window.open(`/itinerary/${id}`, '_blank');
  };

  const handleViewItineraries = () => {
    navigate('/', { state: { itineraries } });
  };

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome, {user.username}
      </motion.h1>
      
      <motion.section
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-2">Personal Details</h2>
        {editMode ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-x-4">
              <button onClick={handleSaveDetails} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
              <button onClick={handleEditToggle} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-2">Username: {username}</p>
            <p className="mb-2">Email: {email}</p>
            <button onClick={handleEditToggle} className="px-4 py-2 bg-blue-500 text-white rounded-md">Edit</button>
          </div>
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-2">Your Itineraries</h2>
        <ul className="space-y-4">
          {itineraries.map((itinerary) => (
            <motion.li
              key={itinerary._id}
              className="p-4 border border-gray-300 rounded-md shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold">{itinerary.title}</h3>
              <p className="text-sm text-gray-700">{itinerary.description}</p>
              <div className="space-x-4 mt-2">
                <button onClick={() => handleView(itinerary.id)} className="px-4 py-2 bg-green-500 text-white rounded-md">View</button>
                <button onClick={() => handleDelete(itinerary.id)} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
              </div>
            </motion.li>
          ))}
        </ul>
        <button onClick={handleViewItineraries} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">View Your Itineraries</button>
      </motion.section>
    </div>
  );
};

export default Dashboard;