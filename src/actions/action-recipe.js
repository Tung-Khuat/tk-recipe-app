const axios = require('axios');
import { Endpoints } from '../endpoints';
import { ActionType } from './action-types';

export async function fetchRecipeList (dispatch) {
  const response = await axios.get(Endpoints.recipeList())
  return dispatch(
    {
      type: ActionType.FETCH_RECIPE_LIST,
      payload: response.data
    }
  );
}
