import React from 'react';
import { Favorite } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function RecipePanel(props) {
  return (
    <div className="header">
      <h1>My Cook Book</h1>
      <Link to="/recipes/new"><Button> Add new recipe</Button></Link>
      <div>
        <Favorite />
        {' '}
        { props.favs && props.favs.length}
      </div>
    </div>
  );
}

export default RecipePanel;
