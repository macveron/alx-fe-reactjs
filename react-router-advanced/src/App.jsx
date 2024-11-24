import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // Import the component for individual blog post
import Home from './components/Home'; // You can add a home component

const App = () => {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          {/* Dynamic Route for Blog Post */}
          <Route path="blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
