import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Nested routes will be rendered here */}
    </div>
  );
};

export default Profile;
