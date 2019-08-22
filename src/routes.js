import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RecipeListIndex from './components/recipe_list/recipe-list-index';
import RecipeFullInfoIndex from './components/recipe_full_info/recipe-full-info-index';

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={RecipeListIndex} />
      <Route path="/recipes/:id" component={RecipeFullInfoIndex} />
    </Router>
  );
}
