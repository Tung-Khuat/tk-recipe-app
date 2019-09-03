import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import RecipeListIndex from './components/recipe_list/recipe-list-index';
import RecipeFullInfoIndex from './components/recipe_full_info/recipe-full-info-index';
import RecipeUploadIndex from './components/recipe_upload/recipe-upload-index';

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={RecipeListIndex} />
      <Route path="/recipes/recipe-info/:id" component={RecipeFullInfoIndex} />
      <Route path="/recipes/new" component={RecipeUploadIndex} />
    </Router>
  );
}
