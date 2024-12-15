import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset any previous errors
  const fetchUserData = async (username) => {
    try {
      // Fetch user data from GitHub API
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
     setError ("Looks like we cant find the user");
      setUserData(null);
    } finally {
      // Turn off the loading state after the request is complete
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub user"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering: Show Loading when API is in progress */}
      {loading && <p>Loading...</p>}

      {/* Conditional Rendering: Show error message if there's an error */}
      {error && <p>{error}</p>}

      {/* Conditional Rendering: Show user data when successfully fetched */}
      {userData && !loading && !error && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
