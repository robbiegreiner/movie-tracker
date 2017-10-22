import movieDataFetcher from '../helpers/movieDataFetcher';
import userDataFetcher from '../helpers/userDataFetcher';
import favoritesFetcher from '../helpers/favoritesFetcher';
import createUserFetcher from '../helpers/createUserFetcher';


export const fetchDataSuccess = movieData => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    movies: movieData
  };
};

export const fetchDataError = bool => ({
  type: 'FETCH_DATA_ERROR',
  fetchDataError: bool
});

export const fetchData = () => {
  return dispatch => {
    movieDataFetcher()
      .then(movies => dispatch(fetchDataSuccess(movies)))
      .catch(() => dispatch(fetchDataError()));
  };
};

export const fetchUserSuccess = userData => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user: userData
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

export const loginError = hasErrored => {
  return {
    type: 'LOGIN_ERROR',
    hasErrored
  };
};
export const signOutUser = () => {
  return {
    type: 'SIGN_OUT_USER'
  };
};

export const createUserError = bool => ({
  type: 'CREATE_USER_ERROR',
  createUserError: bool
});

export const fetchCreateUser = userObj => {
  return dispatch => {
    createUserFetcher(userObj)
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

export const addFavorite = favorite => {
  return {
    type: 'ADD_FAVORITE',
    favorite
  };
};

export const removeFromFaves = (userId, movie) => {
return dispatch => {
    fetch(`api/users/${userId}/favorites/${movie.movie_id}`, {
      method: 'DELETE',
      body: JSON.stringify([userId, movie.movie_id]),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => dispatch(deleteFavorite(movie)));
  };
};

export const deleteFavorite = movie => {
  return {
    type: 'DELETE_FAVORITE',
    movie
  };
};

export const getAllFavorites = favorites => {
  return {
    type: 'GET_ALL_FAVORITES',
    favorites
  };
};

export const favoritesGetter = userId => {
  return dispatch => {
    fetch(`api/users/${userId}/favorites`)
      .then(response => response.json())
      .then(jsonResponse => dispatch(getAllFavorites(jsonResponse.data)));
  };
};

export const postFavorite = (userId, movieObj) => {
  const newFave = Object.assign({user_id: userId}, movieObj);
  favoritesFetcher(newFave);
  // return dispatch => {
  //   dispatch(addFavorite(movieObj));
  // };
  return addFavorite(movieObj);
};
