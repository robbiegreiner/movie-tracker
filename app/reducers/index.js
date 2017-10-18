import { combineReducers } from 'redux';
import movieList from './movielist';
import user from './user'
// import babyreducers

const rootReducer = combineReducers({
  //list of babyreducers
  movieList,
  user
});

export default rootReducer;
