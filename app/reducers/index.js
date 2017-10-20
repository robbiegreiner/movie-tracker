import { combineReducers } from 'redux';
import movieList from './movielist';
import { user, createUserError } from './user';
import { userStatus, loginError } from './userStatus';
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
