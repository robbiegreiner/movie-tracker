import { connect } from 'react-redux';
import { fetchData, postFavorite, favoritesGetter } from '../actions';
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
