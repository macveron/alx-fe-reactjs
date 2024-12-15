import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // Input state for GitHub username
  const [userData, setUserData] = useState(null); // Holds fetched user data
  const [loading, setLoading] = useState(false); // Indicates if the API call is in progress
  const [error, setError] = useState(''); // Holds error message if any

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setLoading(true); // Set loading state to true
    setError(''); // Reset error state
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch data using API service
      setUserData(data); // Store fetched data in state
    } catch (err) {
      setError("Looks like we can't find the user."); // Set error message if user not found or API fails
    } finally {
      setLoading(false); // Set loading state to false after the API call
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Loading message */}
      {error && <p className="text-red-500">{error}</p>} {/* Error message */}
      {userData && (
        <div className="mt-4 border p-4 rounded shadow">
          <img
            src={userData.avatar_url}
            alt={userData.login} // Added login field for alt attribute
            className="w-20 h-20 rounded-full"
          />
          <h3 className="text-lg font-bold">{userData.name || userData.login}</h3> {/* Fallback to login if name is null */}
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
