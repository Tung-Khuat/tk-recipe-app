import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ThumbnailImageCrop from '../image_components/thumbnail-image-crop';

export default function RecipeListItem(props) {
  const {
    recipes, toggleFavAction, favourites, deleteRecipe,
  } = props;

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
          <ThumbnailImageCrop src={recipe.image} />
          )
        }
        <div className="text-wrap"><strong>{recipe.name}</strong></div>
      </Link>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {renderTags(recipe.tag)}
        </div>
        <button type="button" onClick={() => toggleFavAction(recipe)}>
          {favourites.find((fav) => fav._id === recipe._id) ? 'Unfav' : 'Fav'}
        </button>
        <button type="button" onClick={() => deleteRecipe(recipe._id)}>
            x
        </button>
      </section>
    </section>
  ));
}
