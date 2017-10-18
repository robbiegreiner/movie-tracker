import { connect } from 'react-redux';
import { fetchData } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps =  (store) => ({ movieList: store.movieList
});

const mapDispatchToProps = (dispatch) => ({
  retrieveMovies: () => {
    dispatch(fetchData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
