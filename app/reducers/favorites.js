const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.favorite];
  case 'GET_ALL_FAVORITES':
    return [...state, ...action.favorites];
  case 'SIGN_OUT_USER':
    return [];
  default:
    return state;
  }
};

export default favorites;
