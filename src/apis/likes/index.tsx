import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

export const likesApis = {
  async magazineLikeState(id: string, user_id: string) {
    try {
      const response = await axios.post(
        `${apiUrl}/likes/magazine/${id}`,
        user_id
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
