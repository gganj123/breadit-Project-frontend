import axios from 'axios';
import { API_URL } from '../../constants/index.tsx';

export const bookmarksApis = {
  async postMagazineBookmarkToggle(userId: string, postId: string) {
    try {
      const response = await axios.post(
        `${API_URL}/bookmarks/magazinebooktoggle`,
        {
          user_id: userId,
          post_id: postId,
        }
      );

      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async postPostBookmarkToggle(userId: string, postId: string) {
    try {
      const response = await axios.post(`${API_URL}/bookmarks/postbooktoggle`, {
        user_id: userId,
        post_id: postId,
      });

      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async postRecipeBookmarkToggle(userId: string, postId: string) {
    try {
      const response = await axios.post(
        `${API_URL}/bookmarks/recipebooktoggle`,
        {
          user_id: userId,
          post_id: postId,
        }
      );

      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
