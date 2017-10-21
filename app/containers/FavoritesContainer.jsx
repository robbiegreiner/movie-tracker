import { connect } from 'react-redux';
import { postFavorite } from '../actions';
import Favorites from '../components/Favorites';

const mapStateToProps =  (store) => ({
  favesList: store.favorites
  // fetchDataError: store.fetchDataError,
  // user: store.user

});

const mapDispatchToProps = (dispatch) => ({
  sendFavorite: () => {
    dispatch(postFavorite());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
