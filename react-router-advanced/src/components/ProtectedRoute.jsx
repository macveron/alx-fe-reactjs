import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Simulating authentication (set this to true if logged in)

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
