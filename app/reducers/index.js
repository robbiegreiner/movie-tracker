import { combineReducers } from 'redux';
import movieList from './movielist';
import user from './user';
import { userStatus, loginError } from './userStatus';
// import babyreducers

const rootReducer = combineReducers({
  //list of babyreducers
  movieList,
  user,
  userStatus,
  loginError
});

export default rootReducer;
