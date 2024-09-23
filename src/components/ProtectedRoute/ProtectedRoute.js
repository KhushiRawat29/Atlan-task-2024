import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = () => {
    // Implement your logic to check if the user is logged in
    return localStorage.getItem('user') !== null;
  };

  return isLoggedIn() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;


// {`https://maps.gomaps.pro/maps/embed/v1/place?key=AlzaSyPVfHNGE4baFSmoqSUM5FWXl2KuybKnf_K&q=${encodeURIComponent(location)}`}