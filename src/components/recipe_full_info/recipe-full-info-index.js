import React from 'react';
import { fetchRecipeItemById, editRecipeWithId } from '../../actions/action-recipe';
import { Store } from '../../store';
const RecipeFullInfoDisplay = React.lazy(() => import('./recipe-full-info-display'));


export default function RecipeFullInfoIndex(props) {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    fetchRecipeItemById(dispatch, props.match.params.id);
  }, []);

  const recipeDisplayProps = {
    recipe: state.currentRecipeInfo,
  }

  function editCurrentRecipeMethod(newRecipeObject, successHandler) {
    editRecipeWithId(dispatch, props.match.params.id, newRecipeObject, successHandler)
  }

  return (
    <React.Suspense fallback={<div>Loading ... </div>}>
      <RecipeFullInfoDisplay {...state.currentRecipeInfo} editCurrentRecipeMethod={editCurrentRecipeMethod} />
    </React.Suspense>
  );
}
