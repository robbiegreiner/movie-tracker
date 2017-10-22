const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':

    return [...state, Object.assign({}, action.favorite, { isFav: true })];
    // return [...state, action.favorite];
  case 'GET_ALL_FAVORITES':
    return action.favorites.map(favorite =>
      Object.assign({ isFav: true }, favorite)
    );

  case 'SIGN_OUT_USER':
    return [];
  case 'DELETE_FAVORITE':
    // remove favorite from array
    return state.filter( favorite => favorite.movie_id !== action.favorite.movie_id );
  default:
    return state;
  }
};

export default favorites;
