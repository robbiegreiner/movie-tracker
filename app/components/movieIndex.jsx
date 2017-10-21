import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

export default class MovieIndex extends Component {
  constructor() {
    super();
    this.state = {
      needToLogin: false
    };
  }

  componentDidMount() {
    this.props.retrieveMovies();
    this.props.retrieveFavorites();
  }

  addFavorites(movieObj) {
    const { favorites, sendFavorite, user } = this.props;
    if (!user.name) {
      alert('Please, create an account to favorite a movie');
      this.setState({
        needToLogin: true
      });
    } else if (favorites.find(movie => movie.title === movieObj.title)){
      return;
    } else {
      sendFavorite(user.id, movieObj);
    }
  }

  renderCards() {
    //destructure or pass movie down and destructure in movieCard
    return this.props.movieList.map(movie => {
      return <MovieCard key={movie.movie_id}
        addFavorites={this.addFavorites.bind(this)}
        movie={movie}/>;
    });
  }

  render() {
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
  user: PropTypes.object
};


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
