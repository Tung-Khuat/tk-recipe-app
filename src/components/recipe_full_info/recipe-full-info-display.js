import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

export default function RecipeFullInfoDisplay(recipe) {
  const renderIngredience = (ingredience) => ingredience.map((ingredient) => (
    <div>
      {`${ingredient.amount || 'Some'} ${ingredient.unit || 'Amount'} - ${ingredient.name || ''} ${ingredient.preparation ? `(${ingredient.preparation})` : ''}`}
    </div>
  ));

  const renderSteps = (steps) => steps.map((step, index) => (
    <div>
      {index + 1}
      {' '}
-
      {' '}
      {step.description}
    </div>
  ));

  console.log(recipe);
  return (
    <section className="recipe-full-info-card">
      <div className="return-link">
        <Link to="/">
          <h2>
            {' '}
            <ArrowBackRoundedIcon fontSize="large" />
            {' '}
          </h2>
        </Link>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
          {
            recipe.image
            && (
            <img
              className="recipe-info-image"
              src={recipe.image}
              alt={`recipe ${recipe.name}`}
            />
            )
          }
          <h1>{ recipe.name }</h1>
          <p>{ recipe.tag && recipe.tag.map((tag) => <button className="recipe-tag">{tag}</button>) }</p>
          <p>{ recipe.description }</p>
        </div>
        <div className="col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
          <h3>Ingredience</h3>
          <div>{recipe.ingredient && renderIngredience(recipe.ingredient)}</div>

          <h3>Steps</h3>
          <div>{recipe.step && renderSteps(recipe.step)}</div>
        </div>
      </div>
    </section>
  );
}
