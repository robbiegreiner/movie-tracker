const user = (state = {}, action) => {
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
