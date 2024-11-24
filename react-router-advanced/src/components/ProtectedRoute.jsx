import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element; // Return the protected component if the user is authenticated
};

export default ProtectedRoute;
