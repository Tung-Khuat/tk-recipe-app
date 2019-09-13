import { Endpoints } from '../endpoints';
import { ActionType } from './action-types';

const axios = require('axios');

export async function fetchRecipeList(dispatch) {
  const response = await axios.get(Endpoints.recipeList());
  return dispatch(
    {
      type: ActionType.FETCH_RECIPE_LIST,
      payload: response.data,
    },
  );
}

export async function fetchRecipeItemById(dispatch, id) {
  const response = await axios.get(Endpoints.recipeById(id));
  return dispatch(
    {
      type: ActionType.FETCH_RECIPE_ITEM,
      payload: response.data,
    },
  );
}

export async function postNewRecipe(dispatch, newRecipeObject, successHandler) {
  const request = axios({
    method: 'post',
    url: Endpoints.recipeList(),
    data: newRecipeObject,
  });
  try {
    const response = await request;
    fetchRecipeList(dispatch);
    successHandler && successHandler();
  } catch (error) {
    window.alert(error);
  }
}

export async function editRecipeWithId(dispatch, id, newRecipeObject, successHandler) {
  const request = axios({
    method: 'patch',
    url: Endpoints.recipeById(id),
    data: newRecipeObject,
  });
  try {
    const response = await request;
    fetchRecipeList(dispatch);
    successHandler && successHandler();
  } catch (error) {
    window.alert(error);
  }
}

export async function deleteRecipeById(dispatch, id, successHandler) {
  const confirmDelete = confirm('Are you sure you want to delete this recipe?');
  if (confirmDelete) {
    const response = await axios.delete(Endpoints.recipeById(id));
    successHandler && successHandler();
    return dispatch(
      {
        type: ActionType.DELETE_RECIPE,
        payload: id,
      },
    );
  }
}
