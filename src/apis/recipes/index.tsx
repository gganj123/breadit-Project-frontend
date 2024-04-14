import axios from 'axios';

const apiUrl: string = `${import.meta.env.VITE_BACKEND_SERVER}`;

export const recipesApis = {
  async getRecipeList() {
    try {
      const response = await axios.get(`${apiUrl}/recipes`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getRecipe(id: string) {
    try {
      const response = await axios.get(`${apiUrl}/recipes/${id}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteRecipe(id: string) {
    try {
      const reponse = await axios.delete(`${apiUrl}/recipes/${id}`);
      return reponse.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deleteRecipeByCheck(idList: string[]) {
    try {
      const reponse = await axios.delete(`${apiUrl}/recipes/`, {
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
