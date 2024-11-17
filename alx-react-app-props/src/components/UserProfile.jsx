// Import necessary modules
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  // Consume the UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
