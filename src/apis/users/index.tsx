import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

export const usersApi = {
  async getUserList() {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteUser(id: string) {
    try {
      const reponse = await axios.delete(`${apiUrl}/users/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },
};
