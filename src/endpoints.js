const ROOT_URL = "http://13.49.72.3:3000/api"

export const Endpoints = {
  /*
  ---------RECIPES---------
  */
  // Get a list of all recipes
  recipeList() {
    return `${ROOT_URL}/recipe`;
  },
  // Get recipe by ID
  recipeById(id) {
    return `${ROOT_URL}/recipe/${id}`;
  },
  basic(ep) {
    return ROOT_URL + ep;
  },
};
