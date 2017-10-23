import { connect } from 'react-redux';
import { postFavorite, favoritesGetter, removeFromFaves } from '../actions';
import MovieIndex from '../components/movieIndex';

const mapStateToProps =  (store) => ({
  favorites: store.favorites,
  movieList: store.favorites,
  user: store.user

});

const mapDispatchToProps = (dispatch) => ({
  retrieveMovies: () => {},
  sendFavorite: () => {
    dispatch(postFavorite());
  },
  retrieveFavorites: userId => {
    dispatch(favoritesGetter(userId));
  },
  deleteFave: (userId, movie) => {
    dispatch(removeFromFaves(userId, movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
