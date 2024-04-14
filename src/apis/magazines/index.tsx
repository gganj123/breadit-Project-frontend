import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

// GET: getXxx, find

export const magazinesApis = {
  async getMagazineList() {
    try {
      const response = await axios.get(`${apiUrl}/magazines`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getMagazineQuery(query: string, key: string) {
    try {
      const response = await axios.get(`${apiUrl}/magazines?${query}=${key}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getMagazine(id: string) {
    try {
      const response = await axios.get(`${apiUrl}/magazines/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteMagazine(id: string) {
    try {
      const reponse = await axios.delete(`${apiUrl}/magazines/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },
};
