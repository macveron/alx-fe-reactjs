import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost'; // Make sure BlogPost component is imported

const App = () => {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Dynamic Blog Post Route */}
          <Route path="/blog/:id" element={<BlogPost />} /> {/* Ensure this is written as "/blog/:id" */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
