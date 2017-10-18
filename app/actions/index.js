import movieDataFetcher from '../helpers/movieDataFetcher';
//action for submitting login info- alters user
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
