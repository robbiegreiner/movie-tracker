import { connect } from 'react-redux';
import { fetchData, postFavorite, favoritesGetter, removeFromFaves } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = store => ({
  movieList: store.movieList,
  fetchDataError: store.fetchDataError,
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({
  retrieveMovies: () => {
    dispatch(fetchData());
  },
  sendFavorite: (userId, movieObj) => {
    dispatch(postFavorite(userId, movieObj));
  },
  retrieveFavorites: userId => {
    dispatch(favoritesGetter(userId));
  },
  deleteFave: (userId, movie) => {
    dispatch(removeFromFaves(userId, movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
