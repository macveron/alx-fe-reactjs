import axios from 'axios';

const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response.data; // Return user data if successful
  } catch (error) {
    throw new Error("User not found"); // Explicitly throw error for handling
  }
};

export default fetchUserData;
