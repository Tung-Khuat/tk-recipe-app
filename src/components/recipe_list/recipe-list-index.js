import React from 'react';
import { Endpoints } from '../../endpoints';
import { Store } from '../../store';
import { fetchRecipeList } from '../../actions/action-recipe';
import RecipeListItem from './recipe-list-item';

function RecipeListIndex() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.recipes.length === 0 && fetchRecipeList(dispatch);
  });
  const props = {
    recipes: state.recipes,
    favourites: state.favourites,
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
