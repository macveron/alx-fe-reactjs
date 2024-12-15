import axios from 'axios';
const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';

const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = `q=${username ? `user:${username}` : ''}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?${query}`);

    return response.data.items;
  } catch (error) {
    throw new Error(error.response?.status === 404 ? 'User not found' : 'Error fetching data');
  }
};

export default fetchUserData;
