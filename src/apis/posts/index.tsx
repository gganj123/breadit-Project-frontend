import axios from 'axios';
import { API_URL } from '../../constants/index.tsx';

export const postsApis = {
  async getPostList() {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPostQuery(query: string) {
    try {
      const response = await axios.get(`${API_URL}/posts${query}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPost(id: string, token: string | null) {
    try {
      if (token) {
        const response = await axios.get(`${API_URL}/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } else {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },

  async deletePost(id: string) {
    try {
      const reponse = await axios.delete(`${API_URL}/posts/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deletePostByCheck(idList: string[]) {
    try {
      const reponse = await axios.delete(`${API_URL}/posts/`, {
        data: {
          postIds: idList,
        },
      });
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },
};
