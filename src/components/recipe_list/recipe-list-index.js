import React from 'react';
import { Store } from '../../store';
import { fetchRecipeList, deleteRecipeById } from '../../actions/action-recipe';
import RecipeListItem from './recipe-list-item';
import RecipePanel from '../navigation/recipe-panel';

function RecipeListIndex() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.recipes.length === 0 && fetchRecipeList(dispatch);
  });

  const toggleFavAction = (recipe) => {
    const recipeInFavorites = state.favorites.includes(recipe);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: recipe,
    };
    if (recipeInFavorites) {
      const favoritesWithoutRecipe = state.favorites.filter((fav) => fav._id !== recipe._id);
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favoritesWithoutRecipe,
      };
    }
    return dispatch(dispatchObj);
  };

  const deleteRecipe = (id) => {
    const successHandler = () => { console.log(`${id}deleted`); };
    deleteRecipeById(dispatch, id, successHandler);
  };

  const props = {
    recipes: state.recipes,
    toggleFavAction,
    favorites: state.favorites,
    deleteRecipe,
  };

  return (
    <>
      <RecipePanel favs={state.favorites} />
      <section className="recipe-layout">
        <RecipeListItem {...props} />
      </section>
    </>
  );
}

export default RecipeListIndex;
