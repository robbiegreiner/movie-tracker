import { connect } from 'react-redux';
import { postFavorite, favoritesGetter, removeFromFaves } from '../actions';
import Favorites from '../components/Favorites';

const mapStateToProps =  (store) => ({
  favorites: store.favorites,
  movieList: store.movieList,
  // fetchDataError: store.fetchDataError,
  user: store.user

});

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
