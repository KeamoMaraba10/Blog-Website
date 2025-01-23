import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL+'/blog-posts?populate=*');
    console.log(response.data.data);
    return response.data.data; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};
