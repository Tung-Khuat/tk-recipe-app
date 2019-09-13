import React from 'react';
import { postNewRecipe } from '../../actions/action-recipe';
import { Store } from '../../store';
import { recipeSampleData } from '../../actions/recipe.js';

export default function SampleDataUpload() {
  const { state, dispatch } = React.useContext(Store);

  function uploadData(array) {
    array.map((recipe) => {
      postNewRecipe(dispatch, recipe);
    });
  }

  return (
    <>
      <button onClick={() => { uploadData(recipeSampleData); }}> Sample data Upload </button>
    </>
  );
}
