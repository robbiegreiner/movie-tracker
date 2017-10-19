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
  }

  addFavorites(movieObj) {
    if (!this.props.user.name) {
      alert('Please, create an account to favorite a movie');
      this.setState({
        needToLogin: true
      });
    } else if (this.props.favorites.find(movie => movie.title === movieObj.title)){
      return;
    } else {
      this.props.sendFavorite(this.props.user.id, movieObj);
    }

  }

  renderCards() {
    return this.props.movieList.map(movie => {
      return <MovieCard key={movie.movie_id}
        id={movie.movie_id}
        title={movie.title}
        releaseDate={movie.release_date}
        summary={movie.overview}
        score={movie.vote_average}
        addFavorites={this.addFavorites.bind(this)}
        img={movie.poster_path}/>;
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
  movieList: PropTypes.array
};
