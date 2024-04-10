import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

export const magazinesApis = {
  async getMagazineList() {
    try {
      const response = await axios.get(`${apiUrl}/magazines`);
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
};
