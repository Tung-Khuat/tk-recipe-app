import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Grid from '@material-ui/core/Grid';
import RecipeIngredience from './recipe-ingredience';
import RecipeTags from '../recipe_list/recipe-tags';

export default function RecipeFullInfoDisplay(recipe) {
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
            {
              recipe.tag
              && <RecipeTags tagsArray={recipe.tag} />
            }
            <p>{ recipe.description }</p>
          </div>
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid item lg={6} sm={12}>
          {
            recipe.ingredient
            && <RecipeIngredience ingredienceArray={recipe.ingredient} />
          }
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
