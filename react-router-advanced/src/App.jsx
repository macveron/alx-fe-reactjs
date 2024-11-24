// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost'; // Ensure BlogPost component is imported
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import Profile from './components/Profile'; // Import the Profile component
import Login from './components/Login'; // Assuming you have a Login component
import { useAuth } from './hooks/useAuth'; // Import the useAuth hook to manage authentication

const App = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
      <div>
        <h1>My React App</h1>

        {/* Login/Logout buttons for testing authentication */}
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Dynamic Blog Post Route */}
          <Route path="/blog/:id" element={<BlogPost />} /> {/* Ensure this is written as "/blog/:id" */}

          {/* Protected Route: Accessible only if authenticated */}
          <Route 
            path="/profile" 
            element={<ProtectedRoute element={<Profile />} />} 
          />
          
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
