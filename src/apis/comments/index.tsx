import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

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
      const response = await axios.get(`${apiUrl}/comments?post_id=${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteComment(id: string) {
    try {
      const reponse = await axios.delete(`${apiUrl}/comments/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },

  async createComment(commentData: CommentCreateParameters) {
    try {
      const response = await axios.post(`${apiUrl}/comments/`, commentData);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async editComment(id: string, editData: string) {
    try {
      const response = await axios.put(`${apiUrl}/comments/${id}`, {
        content: editData,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
