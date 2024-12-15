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
    setError(null); 

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch (err) {
      console.log('Error fetching data:', err);  
      setError("Looks like we can't find the user");
      setUserData(null);
    } finally {
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

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>} {/* Display the error message here */}

      {userData && (
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
