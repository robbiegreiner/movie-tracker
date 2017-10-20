import { combineReducers } from 'redux';
import movieList from './movielist';
import user from './user';
import createUserError from './createUserError';
import userStatus from './userStatus';
import loginError from './loginError';
import favorites from './favorites';

const rootReducer = combineReducers({
  movieList,
  user,
  userStatus,
  loginError,
  createUserError,
  favorites
});

export default rootReducer;
