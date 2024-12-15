import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setError(""); // Clear previous errors
    setUserData(null); // Reset user data
    setLoading(true); // Show loading state

    try {
      const data = await fetchUserData(username); // Call the API service
      setUserData(data); // Save user data to state
    } catch (err) {
      setError("Looks like we can't find the user"); // Handle errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* User Data Display */}
      {userData && (
        <div className="border p-4 rounded shadow">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h2 className="text-center font-bold text-xl mt-2">{userData.name || "No Name Provided"}</h2>
          <p className="text-center text-gray-600">@{userData.login}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center text-blue-500 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
