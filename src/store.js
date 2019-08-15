import React from 'react';
import { ActionType } from './actions/action-types';

export const Store = React.createContext();

const initialState = {
  recipes: [],
  favourites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ActionType.FETCH_RECIPE_LIST:
      return { ...state, recipes: action.payload };
    case ActionType.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case ActionType.DELETE_RECIPE:
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider (props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}> {props.children} </Store.Provider>
}
