import { axiosInstance, axios } from '../../utils/axios.utils.ts';
import { API_URL } from '../../constants';

type CommentCreateParameters = {
  nickname: string;
  profile: string;
  user_id: string;
  post_id: string;
  content: string;
};

export const commentsApis = {
  async getCommentListByPostId(id: string) {
    try {
      const response = await axios.get(`${API_URL}/comments?post_id=${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteComment(id: string) {
    try {
      const reponse = await axios.delete(`${API_URL}/comments/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },

  async createComment(commentData: CommentCreateParameters) {
    try {
      const response = await axios.post(`${API_URL}/comments/`, commentData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async editComment(id: string, editData: string) {
    try {
      const response = await axios.put(`${API_URL}/comments/${id}`, {
        content: editData,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
