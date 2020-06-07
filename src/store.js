import React from 'react';
import { ActionType } from './actions/action-types';

export const Store = React.createContext();

const initialState = {
  recipes: [],
  currentRecipeInfo: null,
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ActionType.FETCH_RECIPE_LIST:
      return { ...state, recipes: action.payload };
    case ActionType.FETCH_RECIPE_ITEM:
      return { ...state, currentRecipeInfo: action.payload };
    case ActionType.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case ActionType.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe._id != action.payload),
      };
    case 'ADD_FAV':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAV':
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {' '}
      {props.children}
      {' '}
    </Store.Provider>
  );
}
