// src/api.js
import axios from 'axios';

export const fetchUserDetails = async () => {
  try {
    const response = await axios.get('/api/user-details', { withCredentials: true });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
