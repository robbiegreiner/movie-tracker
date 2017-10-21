const createUserError = (state = false, action) => {
  switch (action.type) {
<<<<<<< HEAD
  case 'CREATE_USER_ERROR':
    return action.createUserError;
  case 'FETCH_USER_SUCCESS':
    return false;
=======
  case ('CREATE_USER_ERROR') :
    return true;
>>>>>>> fixes some tests
  default:
    return state;
  }
};

export default createUserError;
