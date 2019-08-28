import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Grid from '@material-ui/core/Grid';

export default function RecipeFullInfoDisplay(recipe) {
  const renderIngredience = (ingredience) => ingredience.map((ingredient) => (
    <div>
      {`${ingredient.amount || 'Some'} ${ingredient.unit || 'Amount'} - ${ingredient.name || ''} ${ingredient.preparation ? `(${ingredient.preparation})` : ''}`}
    </div>
  ));

  const renderSteps = (steps) => steps.map((step, index) => (
    <div>
      {`${index + 1} - ${step.description}`}
    </div>
  ));

  return (
    <section className="recipe-full-info-card">
      <div className="recipe-banner-container">
        <div className="recipe-banner-background" style={{ backgroundImage: `url(${recipe.image})` }} />
        <div className="recipe-banner-content">
          <div className="return-link">
            <Link to="/">
              <h2>
                {' '}
                <ArrowBackRoundedIcon fontSize="large" />
                {' '}
              </h2>
            </Link>
          </div>
          {
            recipe.image
            && (
              <div className="recipe-info-cirlce-image-container">
                <img
                  className="recipe-info-image"
                  src={recipe.image}
                  alt={`recipe ${recipe.name}`}
                />
              </div>
            )
          }
          <div className="recipe-info-title">
            <h1>{ recipe.name }</h1>
            <p>{ recipe.tag && recipe.tag.map((tag) => <button className="recipe-tag">{tag}</button>) }</p>
            <p>{ recipe.description }</p>
          </div>
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid item lg={6} sm={12}>
          <div className="recipe-instructions">
            <h3>Ingredience</h3>
            <div>{recipe.ingredient && renderIngredience(recipe.ingredient)}</div>
          </div>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div className="recipe-instructions">
            <h3>Steps</h3>
            <div>{recipe.step && renderSteps(recipe.step)}</div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
