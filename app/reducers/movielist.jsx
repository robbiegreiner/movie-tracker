const movieList = (state = [], action) => {
  switch (action.type) {
  case "FETCH_DATA_SUCCESS":
    return action.movies.map( movie => {
      return Object.assign({}, movie, { isFav: false });
    });
  // case 'FETCH_DATA_SUCCESS':
  //   return action.movies;
  default:
    return state;
  }
};

export default movieList;
