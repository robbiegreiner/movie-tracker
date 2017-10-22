const movieList = (state = [], action) => {
  switch (action.type) {
  case "FETCH_DATA_SUCCESS":
    return action.movies.map( movie => {
      //if movie is in faves list, isFave: true
      //we don't have access to faves list here
      return Object.assign({}, movie, { isFav: false });
    });
  case 'ADD_FAVORITE':
    return state.map( movie => {
      if ( action.favorite.title === movie.title ) {
        return Object.assign({}, movie, action.favorite, { isFav: true });
      }
      return movie;
    });
  case 'DELETE_FAVORITE':
    return state.map( stateMovie => {
      if ( action.movie.title === stateMovie.title ) {
        return Object.assign({}, stateMovie, action.movie, { isFav: false });
      }
      return stateMovie;
    });


  // case 'FETCH_DATA_SUCCESS':
  //   return action.movies;
  default:
    return state;
  }
};

export default movieList;
