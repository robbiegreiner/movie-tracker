const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, Object.assign({}, action.favorite, { isFav: true })];
  case 'GET_ALL_FAVORITES':
    return action.favorites.map(favorite =>
      Object.assign({ isFav: true }, favorite)
    );

  case 'SIGN_OUT_USER':
    return [];
  case 'DELETE_FAVORITE':
    return state.filter( favorite => favorite.movie_id !== action.movie.movie_id );
  default:
    return state;
  }
};

export default favorites;
