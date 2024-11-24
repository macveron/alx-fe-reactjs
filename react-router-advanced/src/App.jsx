import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // Make sure you have the BlogPost component
import Home from './components/Home'; // Assuming you have a Home component

const App = () => {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Profile Routes */}
          <Route path="profile/*" element={<Profile />} />
          
          {/* Dynamic Blog Post Route */}
          <Route path="blog/:id" element={<BlogPost />} /> {/* This is the dynamic route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
