import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      needToLogin: false
    };
  }

  componentDidMount() {
    console.log(this.props.user.id);
    // this.prop.retrieveFavorites(this.props.user.id);
  }

  // addFavorites(movieObj) {
  // }

  renderCards() {
    return this.props.favesList.map(movie => {
      return <MovieCard key={movie.movie_id}
        addFavorites={() => {}}
        movie={movie}/>;
    });
  }

  render() {
    console.log(this.props.retrieveFavorites)
    return (
      <div className='movie-list'>
        {this.props.favesList.length && this.renderCards()}
      </div>
    );
  }
}

Favorites.propTypes = {
  retrieveMovies: PropTypes.func,
  movieList: PropTypes.array,
  favesList: PropTypes.array,
  sendFavorite: PropTypes.func,
  user: PropTypes.object
};
