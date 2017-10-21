const createUserError = (state = false, action) => {
  switch (action.type) {
  case 'CREATE_USER_ERROR':
    return action.createUserError;
  case 'FETCH_USER_SUCCESS':
    return false;
  default:
    return state;
  }
};

export default createUserError;
