const movieList = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_DATA_SUCCESS':
    return action.movies;
  default:
    return state;
  }
};

export default movieList;


export const fetchHasErred = (state = false, action) => {
  switch (action.type) {
  case "FETCH_HAS_ERRED":
    return action.hasErred;
  default:
    return state;
  }
};
