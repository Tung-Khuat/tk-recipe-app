import React from 'react'

export default function RecipeList(props) {
  const { recipes, toggleFavAction, favourites } = props;

  return recipes.map(recipe => {
    return (
      <section key={recipe._id} className="recipe-box">
        {
          recipe.image &&
          <img
            src={recipe.image.medium}
            alt={`recipe ${recipe.name}`}
          />
        }
        <div>{recipe.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {recipe.season} recipe: {recipe.number}
          </div>
          <button type='button' onClick={() => toggleFavAction(recipe)}>
            {favourites.find(fav => fav.id === recipe.id) ? 'Unfav' : 'Fav'}
          </button>
        </section>
      </section>
    );
})
}
