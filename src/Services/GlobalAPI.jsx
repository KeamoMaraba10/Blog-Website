import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/blogs?populate=*`);
    console.log(response.data.data);
    return response.data.data; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostById = async (documentId) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${documentId}?populate=*`);
    return response.data.data; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};
