import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

export const likesApis = {
  async postMagazineLikeToggle(userId: string, postId: string) {
    try {
      const response = await axios.post(`${apiUrl}/likes/magazinetoggle`, {
        user_id: userId,
        post_id: postId,
      });

      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
