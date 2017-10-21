const loginError = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_ERROR':
    return action.hasErrored;
  default:
    return state;
  }
};

export default loginError;
