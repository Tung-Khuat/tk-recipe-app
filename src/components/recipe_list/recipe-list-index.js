import React from 'react';
import { Endpoints } from '../../endpoints';
import { Store } from '../../store';
import { fetchRecipeList, deleteRecipeById } from '../../actions/action-recipe';
import RecipeListItem from './recipe-list-item';

function RecipeListIndex() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.recipes.length === 0 && fetchRecipeList(dispatch);
  });

  const toggleFavAction = (recipe) => {
    const recipeInFavourites = state.favourites.includes(recipe);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: recipe,
    };
    if (recipeInFavourites) {
      const favouritesWithoutRecipe = state.favourites.filter((fav) => fav._id !== recipe._id);
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favouritesWithoutRecipe,
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
    favourites: state.favourites,
    deleteRecipe,
  };

  return (
    <>
      <div className="header">
        <h1>My recipes</h1>
        <div>
          Favourite(s)
          {' '}
          {state.favourites.length}
        </div>
      </div>
      <section className="recipe-layout">
        <RecipeListItem {...props} />
      </section>
    </>
  );
}

export default RecipeListIndex;
