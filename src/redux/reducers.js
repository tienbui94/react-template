import { combineReducers } from '@reduxjs/toolkit';

export function createReducer(injectedReducers) {
  if (!injectedReducers || Object.keys(injectedReducers).length === 0) {
    return state => state;
  }
  return combineReducers({
    ...injectedReducers,
  });
}
