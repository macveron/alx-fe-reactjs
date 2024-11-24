// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // BlogPost component for individual blog posts
import Home from './components/Home'; // Home component or any other page

const App = () => {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Home />} />
          
          {/* Profile Routes */}
          <Route path="profile/*" element={<Profile />} />
          
          {/* Dynamic Blog Post Route */}
          <Route path="blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
