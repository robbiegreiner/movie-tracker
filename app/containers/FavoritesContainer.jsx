import { connect } from 'react-redux';
import { postFavorite, favoritesGetter } from '../actions';
import Favorites from '../components/Favorites';

const mapStateToProps =  (store) => ({
  favesList: store.favorites,
  // fetchDataError: store.fetchDataError,
  user: store.user

});

const mapDispatchToProps = (dispatch) => ({
  sendFavorite: () => {
    dispatch(postFavorite());
  },
  retrieveFavorites: userId => {
    dispatch(favoritesGetter(userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
