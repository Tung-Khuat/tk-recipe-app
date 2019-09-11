import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


export default function RecipeIngredience(props) {
  const { isEditModeActive, ingredienceArray, updateIngredienceArrayMethod } = props;

  function handleOnClickAddIngredience() {
    const newStepsArray = [
      ...ingredienceArray,
      {
        amount: '',
        unit: '',
        name: '',
        preparation: '',
      },
    ];
    updateIngredienceArrayMethod(newStepsArray);
  }

  function renderIngredienceGridItem(displayValue, itemIndex, type, className, gridSize) {
    return (
      <>
        {
          isEditModeActive
            ? (
              <input
                value={displayValue}
                onChange={(e) => {
                  const newArray = [...ingredienceArray];
                  newArray[itemIndex][type] = e.target.value;
                  updateIngredienceArrayMethod(newArray);
                }}
                placeholder={`${type}`}
                type="text"
              />
            )
            : displayValue
        }
      </>
    );
  }
  function renderIngredience(ingredience) {
    return (
      <>
        {
          ingredience.map((ingredient, index) => (
            <Grid className="ingredience-container" container spacing={1} key={index}>
              {
                (ingredient.amount || isEditModeActive)
                && (
                  <Grid item xs={2} className="ingredience-item text-center">

                    {renderIngredienceGridItem(ingredient.amount, index, 'amount')}
                  </Grid>
                )
              }
              {
                (ingredient.unit || isEditModeActive)
                && (
                  <Grid item xs={2} className="ingredience-item text-center">

                    {renderIngredienceGridItem(ingredient.unit, index, 'unit')}
                  </Grid>
                )
              }
              <Grid item className="ingredience-item max-width">
                {
                  (ingredient.name || isEditModeActive)
                  && (
                    renderIngredienceGridItem(ingredient.name, index, 'name')
                  )
                }
                {
                  (ingredient.preparation || isEditModeActive)
                  && (
                    renderIngredienceGridItem(ingredient.preparation, index, 'preparation')
                  )
                }
              </Grid>
            </Grid>
          ))
        }
        {
          isEditModeActive
          && (
          <Button variant="outlined" component="span" aria-label="add" fullWidth onClick={handleOnClickAddIngredience}>
            <AddIcon />
          </Button>
          )
        }
      </>
    );
  }
  return (
    <div className="recipe-instructions">
      <h3>Ingredience</h3>
      {
        ingredienceArray
        && renderIngredience(ingredienceArray)
      }
    </div>
  );
}
