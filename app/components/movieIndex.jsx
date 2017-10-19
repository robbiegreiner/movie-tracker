import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

export default class MovieIndex extends Component {

  componentDidMount() {
    this.props.retrieveMovies();
  }

  renderCards() {
    return this.props.movieList.map(movie => {
      return <MovieCard key={movie.id}
        title={movie.title}
        releaseDate={movie.releaseDate}
        summary={movie.summary}
        score={movie.score}
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
