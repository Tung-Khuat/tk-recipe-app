import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function RecipeListItem(props) {
  const { recipes, toggleFavAction, favourites } = props;

  function renderTags(tags) {
    return tags.map((tag) => (
      <button className="recipe-tag">{tag}</button>
    ));
  }

  return recipes.map((recipe) => (
    <section className="recipe-box" key={recipe._id}>
      <Link to={`/recipes/${recipe._id}`}>
        {
          recipe.image
          && (
          <img
            className="recipe-thumbnail"
            src={recipe.image}
            alt={`recipe ${recipe.name}`}
          />
          )
        }
        <div>{recipe.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            {renderTags(recipe.tag)}
          </div>
          <button type="button" onClick={() => toggleFavAction(recipe)}>
            {favourites.find((fav) => fav.id === recipe.id) ? 'Unfav' : 'Fav'}
          </button>
        </section>
      </Link>
    </section>
  ));
}
