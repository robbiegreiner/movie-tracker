import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class MovieIndex extends Component {

  componentDidMount() {
    this.props.retrieveMovies();
  }

  addFavorites() {
    if (!this.props.user.name) {
      alert('Please, create an account to favorite a movie')
    }
  }

  renderCards() {
    return this.props.movieList.map(movie => {
      return <MovieCard key={movie.id}
        title={movie.title}
        releaseDate={movie.releaseDate}
        summary={movie.summary}
        score={movie.score}
        addFavorites={this.addFavorites.bind(this)}
        img={movie.img}/>;
    });
  }

  render() {
    return (
      <div className='movie-list'>
        {this.props.movieList.length && this.renderCards()}
      </div>
    );
  }
}

MovieIndex.propTypes = {
  retrieveMovies: PropTypes.func,
  movieList: PropTypes.array
};
