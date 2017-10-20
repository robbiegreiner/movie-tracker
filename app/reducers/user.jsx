const user = (state = {}, action) => {
  //several actions will change the user Object
  //so we will have a few switch cases in here
  switch (action.type) {
  case 'FETCH_USER_SUCCESS':
    return action.user;
  case 'SIGN_OUT_USER':
    return {};
  default:
    return state;
  }
};

export default user;
