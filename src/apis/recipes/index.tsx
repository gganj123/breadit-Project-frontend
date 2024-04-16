import axios from 'axios';
import { API_URL } from '../../constants/index.tsx';

export const recipesApis = {
  async getRecipeList() {
    try {
      const response = await axios.get(`${API_URL}/recipes`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getRecipeQuery(query: string) {
    try {
      const response = await axios.get(`${API_URL}/recipes${query}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getRecipe(id: string, token: string | null) {
    try {
      if (token) {
        const response = await axios.get(`${API_URL}/recipes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } else {
        const response = await axios.get(`${API_URL}/recipes/${id}`);
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },

  async deleteRecipe(id: string) {
    try {
      const reponse = await axios.delete(`${API_URL}/recipes/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteRecipeByCheck(idList: string[]) {
    try {
      const reponse = await axios.delete(`${API_URL}/recipes/`, {
        data: {
          recipeIds: idList,
        },
      });
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },
};
