import { connect } from 'react-redux';
import { getMovies } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps =  (store) => ({ movieList: store.movieList
});

const mapDispatchToProps = (dispatch) => ({
  retrieveMovies: () => {
    dispatch(getMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
