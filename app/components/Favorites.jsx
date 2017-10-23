import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class Favorites extends Component {

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

  handleFavorites(movie) {
    const { deleteFave, user } = this.props;

    if (!movie.isFav) {
      this.addFavorites(movie);
    } else {
      deleteFave(user.id, movie);
    }
  }


  renderCards() {
    return this.props.favorites.map(movie => {
      return <MovieCard key={movie.movie_id}
        handleFavorites={this.handleFavorites.bind(this)}
        movie={movie}/>;
    });
  }

  render() {
    return (
      <div className='movie-list faves-list'>
        {this.props.favorites.length && this.renderCards()}
      </div>
    );
  }
}

Favorites.propTypes = {
  retrieveMovies: PropTypes.func,
  movieList: PropTypes.array,
  favorites: PropTypes.array,
  sendFavorite: PropTypes.func,
  user: PropTypes.object,
  deleteFave: PropTypes.func
};
