import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

export const postsApis = {
  async getPostList() {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPostQuery(query: string, key: string) {
    try {
      const response = await axios.get(`${apiUrl}/posts?${query}=${key}`);
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

  async deletePost(id: string) {
    try {
      const reponse = await axios.delete(`${apiUrl}/posts/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },
};
