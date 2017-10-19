import movieDataFetcher from '../helpers/movieDataFetcher';
import userDataFetcher from '../helpers/userDataFetcher';
// import createUserFetcher from '../helpers/createUserFetcher';

//action for creating new user- alters user
//action for favoriting a movie- alters userFaves
//action for unfavoriting a movie- alters userFaves
//action for getting favorite movies- I don't think we need this, it's just a Link/NavLink
//action for signing out- alters user

// what do we need in store?
// user
// movies
// userFaves

export const fetchDataSuccess = movieData => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    movies: movieData
  };
};

export const fetchData = () => {
  return dispatch => {
    movieDataFetcher()
      .then(movies => dispatch(fetchDataSuccess(movies)));
  };
};

export const fetchUserSuccess = userData => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user: userData
  };
};

export const signOutUser = () => {
  return {
    type: 'SIGN_OUT_USER'
  };
};

export const fetchUser = userObj => {
  return dispatch => {
    userDataFetcher(userObj)
      .then(userData => dispatch(fetchUserSuccess(
        Object.assign(
          {},
          userData,
          { password: 'NO PASSWORDS HERE'}
        )
      )))
      .catch(response => dispatch(loginError(true)));
  };
};

export const createUserError = bool => ({
  type: 'CREATE_USER_ERROR',
  createUserError: bool
});

export const fetchCreateUser = userObj => {
  return dispatch => {
    fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify(userObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200) {
          dispatch(createUserError(true));
        } else {
          return res;
        }
      })
      .then(res => res.json())
      .then(userData =>
        dispatch(
          fetchUserSuccess(
            Object.assign(
              {},
              {
                name: userObj.name,
                email: userObj.email
              },
            )
          )
        )
      )
      .catch(() => dispatch(createUserError(true)));
  };
};


export const loginError = hasErrored => {
  return {
    type: 'LOGIN_ERROR',
    hasErrored
  };
};

// export const fetchDataError = () => ({
//   type: 'FETCH_DATA_ERROR'
// });
