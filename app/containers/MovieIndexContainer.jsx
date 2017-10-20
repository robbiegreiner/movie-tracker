import { connect } from 'react-redux';
import { fetchData, postFavorite } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps =  (store) => ({
  movieList: store.movieList,
  fetchDataError: store.fetchDataError,
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = (dispatch) => ({
  retrieveMovies: () => {
    dispatch(fetchData());
  },
  sendFavorite: (userId, movieObj) => {
    dispatch(postFavorite(userId, movieObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
