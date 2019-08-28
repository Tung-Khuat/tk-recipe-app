import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import {
  Delete, FavoriteBorder, Favorite,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ThumbnailImageCrop from '../image_components/thumbnail-image-crop';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function RecipeListItem(props) {
  const {
    recipes, toggleFavAction, favourites, deleteRecipe,
  } = props;

  const classes = useStyles();

  function renderTags(tags) {
    return tags.map((tag) => (
      <button className="recipe-tag">{tag}</button>
    ));
  }

  return recipes.map((recipe) => (
    <section className="recipe-box" key={recipe._id}>
      <div className="toggle-fav-icon" onClick={() => toggleFavAction(recipe)}>
        {favourites.find((fav) => fav._id === recipe._id) ? <Favorite /> : <FavoriteBorder />}
      </div>
      <Link to={`/recipes/${recipe._id}`}>
        {
          recipe.image
          && (
          <ThumbnailImageCrop src={recipe.image} customClass="cover-cropped" />
          )
        }
        <div className="text-wrap"><strong>{recipe.name}</strong></div>
      </Link>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {recipe.tag && renderTags(recipe.tag)}
        </div>
        <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteRecipe(recipe._id)}>
          <Delete />
        </IconButton>
      </section>
    </section>
  ));
}
