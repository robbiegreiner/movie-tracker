import MovieDataCleaner from '../helpers/movieDataCleaner';
import mockMovieData from '../helpers/mockMovieData';

//action for submitting login info- alters user
//action for creating new user- alters user
//action for favoriting a movie- alters userFaves
//action for unfavoriting a movie- alters userFaves
//action for getting movies and populating movie index? on page load?- alters movies
//action for getting favorite movies- I don't think we need this, it's just a Link/NavLink
//action for signing out- alters user

// what do we need in store?
// user
// movies
// userFaves

export const fetchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(responseJSON => console.log(responseJSON))
  };

};


export const getMovies = () => {
  //pass in url instead of mock data
  const movies = new MovieDataCleaner(mockMovieData.results);
  return ({
    type: 'GET_MOVIES',
    movies: movies.movies
  });
};
