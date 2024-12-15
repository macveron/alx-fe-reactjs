import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // Input for username
  const [userData, setUserData] = useState(null); // Holds user data
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [error, setError] = useState(''); // Holds error message

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    setLoading(true); // Indicate loading state
    setError(''); // Clear any previous error messages
    setUserData(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Call GitHub API service
      setUserData(data); // Store data if successful
    } catch (err) {
      setError("Looks like we can't find the user."); // Set error message
    } finally {
      setLoading(false); // Reset loading state
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
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>} {/* Show while loading */}
      {error && <p className="text-red-500">{error}</p>} {/* Display error */}
      {userData && (
        <div className="mt-4 border p-4 rounded shadow">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full"
          />
          <h3 className="text-lg font-bold">{userData.name || userData.login}</h3>
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
