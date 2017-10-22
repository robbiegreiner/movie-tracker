const movieList = (state = [], action) => {
  switch (action.type) {
  case "FETCH_DATA_SUCCESS":
    return action.movies.map( movie => {
      return Object.assign({}, movie, { isFav: false });
    });
  case 'ADD_FAVORITE':
    return state.map( movie => {
      if ( action.favorite.title === movie.title ) {
        return Object.assign({}, movie, action.favorite, { isFav: true });
      }
      return movie;
    });
  // case 'FETCH_DATA_SUCCESS':
  //   return action.movies;
  default:
    return state;
  }
};

export default movieList;
