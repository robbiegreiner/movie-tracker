const movieList = (state = [], action) => {
  switch (action.type) {
  case 'GET_MOVIES':
    return [...state, ...action.movies];
  default:
    return state;
  }
};

export default movieList;
