import React, { useState } from 'react';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';
import {
  Delete, FavoriteBorder, Favorite,
} from '@material-ui/icons';
import ThumbnailImageCrop from '../image_components/thumbnail-image-crop';
import RecipeTags from './recipe-tags';

export default function RecipeListItem(props) {
  const {
    recipes, toggleFavAction, favorites, deleteRecipe,
  } = props;

  const [isHoveredItem, setHoveredItem] = useState(null);

  function renderTags(tags) {
    return tags.map((tag) => (
      <button className="recipe-tag">{tag}</button>
    ));
  }


  return (
    <>
      {
        recipes && recipes.length > 0
        && recipes.map((recipe) => (
          <section className="recipe-box" key={recipe._id} onMouseEnter={() => { setHoveredItem(recipe._id); }} onMouseLeave={() => { setHoveredItem(null); }}>
            <div className="toggle-fav-icon" onClick={() => toggleFavAction(recipe)}>
              {favorites && favorites.find((fav) => fav._id === recipe._id) ? <Favorite /> : <FavoriteBorder />}
            </div>
            <div className="recipe-box-delete-icon" onClick={() => deleteRecipe(recipe._id)}>
              <Delete />
            </div>
            <Link to={`/recipes/recipe-info/${recipe._id}`}>
              {
                recipe.image
                && (
                <ThumbnailImageCrop src={recipe.image} customClass="cover-cropped" />
                )
              }
              <div className="recipe-box-info">
                <div className="recipe-box-title">{recipe.name}</div>
              </div>
            </Link>
            {
              (isHoveredItem === recipe._id)
              && (
              <div className="recipe-box-detailed-info">
                <div className="recipe-box-title">
                  <Link to={`/recipes/recipe-info/${recipe._id}`}>{recipe.name}</Link>
                </div>
                <RecipeTags tagsArray={recipe.tag} />
              </div>
              )
            }

          </section>
        ))
      }
    </>
  );
}
