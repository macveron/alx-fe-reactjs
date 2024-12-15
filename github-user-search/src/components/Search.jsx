import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null); // Reset any previous errors

    try {
      // Construct the query parameters based on the form inputs
      let query = `user:${username}`;
      if (location) query += ` location:${location}`;
      if (minRepos) query += ` repos:>=${minRepos}`;

      // Use the GitHub search API with the query parameters
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUserData(response.data.items);
    } catch (err) {
      setError ("Looks like we cant find the user");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub user"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}

      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {userData && (
        <div className="mt-4">
          {userData.map((user) => (
            <div key={user.id} className="border-b border-gray-300 pb-4 mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <p className="text-sm text-gray-600">Location: {user.location || "N/A"}</p>
              <p className="text-sm text-gray-600">Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
