export const userStatus = (state = '', action) => {
  switch (action.type) {
  case 'FETCH_USER_SUCCESS':
    return true;
  case 'SIGN_OUT_USER':
    return "";
  default:
    return state;
  }
};

export const loginError = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN_ERROR':
    return action.hasErrored;
  default:
    return state;
  }
};

export default userStatus;
