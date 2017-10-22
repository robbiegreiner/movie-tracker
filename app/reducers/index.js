import { combineReducers } from 'redux';
import movieList from './movielist';
import user from './user';
import createUserError from './createUserError';
import userStatus from './userStatus';
import loginError from './loginError';
import fetchDataError from './fetchDataError';
import favorites from './favorites';

const rootReducer = combineReducers({
  movieList,
  user,
  userStatus,
  loginError,
  createUserError,
  fetchDataError,
  favorites
});

export default rootReducer;
