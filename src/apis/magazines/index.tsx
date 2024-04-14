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

  async getMagazine(id: string, token: string) {
    try {
      if (token) {
        let response = await axios.get(`${apiUrl}/magazines/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } else {
        let response = await axios.get(`${apiUrl}/magazines/${id}`);
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },

  async deleteMagazine(id: string) {
    try {
      const response = await axios.delete(`${apiUrl}/magazines/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
