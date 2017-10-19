import { combineReducers } from 'redux';
import movieList from './movielist';
import user from './user';
import userStatus from './userStatus';
import { fetchDataError, fetchUserError, createUserError } from './errors';
// import babyreducers

const rootReducer = combineReducers({
  //list of babyreducers
  movieList,
  user,
  userStatus,
  fetchDataError,
  fetchUserError,
  createUserError
});

export default rootReducer;
