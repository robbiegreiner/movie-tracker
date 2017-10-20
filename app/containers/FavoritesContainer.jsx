import { connect } from 'react-redux';
import { postFavorite, getAllFaves } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps =  (store) => ({
  movieList: store.favorites,
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = (dispatch) => ({
  retrieveMovies: () => {},
  sendFavorite: (userId, movieObj) => {
    dispatch(postFavorite(userId, movieObj));
  },
  getAllFaves: (userId) => {
    dispatch(getAllFaves(userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
