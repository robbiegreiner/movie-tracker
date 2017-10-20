const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...state, action.favorite];
  case 'GET_ALLFAVES':
    return action.favesArray;
  default:
    return state;
  }
};

export default favorites;
