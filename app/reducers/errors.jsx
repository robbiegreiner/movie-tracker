// export const fetchDataError = (state = false, action) => {
//   switch (action.type) {
//   case ('FETCH_DATA_ERROR') :
//     return true;
//   default:
//     return state;
//   }
// };

export const fetchUserError = (state = false, action) => {
  switch (action.type) {
  case ('FETCH_USER_ERROR') :
    return true;
  default:
    return state;
  }
};

export const createUserError = (state = false, action) => {
  switch (action.type) {
  case ('CREATE_USER_ERROR') :
    return true;
  default:
    return state;
  }
};
