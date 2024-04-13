import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

// GET: getXxx, find

export const postsApis = {
  async getPostList() {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPost(id: string) {
    try {
      const response = await axios.get(`${apiUrl}/posts/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
