import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ItineraryDetails from './components/ItineraryDetails/ItineraryDetails';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import UserTypeSelection from './components/UserTypeSelection/UserTypeSelection';
import AboutUs from './components/AboutUs/AboutUs';
import Perks from './components/Perks/Perks';
import { FaUserCircle } from 'react-icons/fa';
import QuestionsSection from './components/QuestionsSection/QuestionsSection';
import AllItineraries from './components/AllItineraries/AllItineraries';
import itineraryData from './data/itineraries.json';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [itineraries, setItineraries] = useState([]);
   const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('user');
    try {
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      return null;
    }
  });
  const [location, setLocation] = useState('');
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleGenerateItinerary = (preferences) => {
    setLocation(preferences.location);
    setItineraries(itineraryData);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  const handleSignUpSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  const handleReset = () => {
    setItineraries([]);
    localStorage.removeItem('itineraries');
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="container mx-auto p-8 min-h-screen relative bg-white">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Travel Planner</h1>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="px-4 py-2 text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300">Home</Link>
            <Link to="/about-us" className="px-4 py-2 text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300">About Us</Link>
            <Link to="/perks" className="px-4 py-2 text-black font-bold rounded-md hover:bg-gray-200 transition-colors duration-300">Perks</Link>
            <Link to="/dashboard" className="text-gray-800 hover:text-gray-600">
              <FaUserCircle size={32} />
            </Link>
          </nav>
        </div>
        <Routes>
          <Route path="/signup" element={<SignUp onSignUpSuccess={handleSignUpSuccess} />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard user={user} itineraries={JSON.parse(localStorage.getItem('savedItineraries')) || []} setItineraries={setItineraries} />
            </ProtectedRoute>
          } />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/all-itineraries" element={<AllItineraries itineraries={itineraries} />} />
          <Route path="/" element={
            <div className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row gap-8">
                <QuestionsSection handleGenerateItinerary={handleGenerateItinerary} formRef={formRef} handleReset={handleReset} />
                <div className="flex flex-col gap-8" style={{ flex: 3 }}>
                  <div className="shadow-lg rounded-2xl">
                    <iframe
                      title="Google Map"
                      width="100%"
                      height="500px"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: '1rem' }}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="rounded-2xl pl-8 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {itineraries.slice(0, 2).map(itinerary => (
                        <div key={itinerary.id} className="w-full p-2 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ aspectRatio: '4 / 3' }}>
                          <div className="h-3/4">
                            <img src={itinerary.image} alt={itinerary.title} className="w-full h-full object-cover rounded-t-lg" />
                          </div>
                          <div className="p-1">
                            <h6 className="text-sm font-bold pb-1">{itinerary.title}</h6>
                            <p className="text-sm"> {itinerary.location}</p>
                            <h4 className="text-md font-semibold">{itinerary.budget}/day</h4>
                            <Link to={`/itinerary/${itinerary.id}`} className="text-blue-500 pb-4 inline-block">more...</Link>
                          </div>
                        </div>
                      ))}
                      {itineraries.length > 2 && (
                        <div className="w-full p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative" style={{ aspectRatio: '4 / 3' }}>
                          <div className="h-full w-full absolute inset-0 bg-opacity-50 backdrop-blur-sm rounded-lg"></div>
                          <div className="h-3/4">
                            <img src={itineraries[2].image} alt={itineraries[2].title} className="w-full h-full object-cover rounded-t-lg" />
                          </div>
                          <div className="p-1">
                            <h6 className="text-lg font-bold pb-1">{itineraries[2].title}</h6>
                            <p className="text-sm"><strong>Location:</strong> {itineraries[2].location}</p>
                            <h4 className="text-md font-semibold"><strong>Budget:</strong> {itineraries[2].budget}</h4>
                          </div>
                          <div className="absolute inset-0 flex justify-center items-center">
                            <Link to="/all-itineraries" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-300">
                              View All
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
        </Routes>
        {showLoginPopup && <Login onLoginSuccess={handleLoginSuccess} />}
        {showSignUpPopup && <SignUp onSignUpSuccess={handleSignUpSuccess} />}
      </div>
    </div>
  );
};

export default App;