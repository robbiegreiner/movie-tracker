import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class MovieIndex extends Component {
  constructor() {
    super();
    this.state = {
      needToLogin: false
    };
  }

  componentDidMount() {
    this.props.retrieveMovies();
    this.props.retrieveFavorites(this.props.user.id);
  }

  addFavorites(movieObj) {
    const { favorites, sendFavorite, user } = this.props;
    if (!user.name) {
      alert('You must create an account to favorite a movie');
      this.setState({
        needToLogin: true
      });
    } else if (favorites.find(movie => movie.title === movieObj.title)){
      return;
    } else {
      sendFavorite(user.id, movieObj);
    }
  }

  addFavProperty() {
    const { favorites, movieList } = this.props;
    const faveIds = favorites.reduce((acc, fave) => {
      acc.push(fave.movie_id);
      return acc;
    }, []);

    if (favorites.length > 0) {
      return movieList.map(movie => {
        if (faveIds.includes(movie.movie_id)) {
          // console.log('includes works');
          return Object.assign(movie, { isFav: true });
        } else {
          return movie;
        }
      });
    } else {
      return movieList;
    }
  }

  handleFavorites(movie) {
    const { deleteFave, user } = this.props;

    if (!movie.isFav) {
      this.addFavorites(movie);
    } else {
      deleteFave(user.id, movie);
    }
  }

  renderCards() {
    return this.addFavProperty().map(movie => {
      return <MovieCard key={movie.movie_id}
        handleFavorites={this.handleFavorites.bind(this)}
        movie={movie}/>;
    });
  }

  render() {

    if (this.props.fetchDataError) {
      return <p>Whoops...</p>;
    }
    return (
      <div className='movie-list'>
        {this.state.needToLogin && <Redirect to='/createuser'/>}
        {this.props.movieList.length && this.renderCards()}
      </div>
    );
  }
}

MovieIndex.propTypes = {
  retrieveMovies: PropTypes.func,
  movieList: PropTypes.array,
  favorites: PropTypes.array,
  sendFavorite: PropTypes.func,
  user: PropTypes.object,
  retrieveFavorites: PropTypes.func,
  fetchDataError: PropTypes.func,
  deleteFave: PropTypes.func
};

export default MovieIndex;


// handleFavorites(movie) {
//
//   if (movie.isFav) {
//     this.removeFavorites(movie);
//   } else {
//     this.addFavorites(movie);
//   }
// }
//
// addFavProp() {
//   if (this.props.favorites) {
//     const favIDs = this.props.movieList.map(fav => fav.movie_id);
//
//     return this.props.movieList.map( movie => {
//       if (favIDs.includes(movie.id)) {
//         return Object.assign({}, movie, { isFav: true});
//       }
//       return movie;
//     });
//   } else {
//     return this.props.favorites;
//   }
// }
