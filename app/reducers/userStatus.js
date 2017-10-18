const userStatus = (state = '', action) => {
  switch (action.type) {
  case 'FETCH_USER_SUCCESS':
    return true;
  default:
    return state;
  }
};

export default userStatus;
