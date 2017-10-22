import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

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
    //destructure or pass movie down and destructure in movieCard
    return this.props.favesList.map(movie => {
      return <MovieCard key={movie.movie_id}
        // addFavorites={this.addFavorites.bind(this)}
        movie_id={movie.movie_id}
        title={movie.title}
        release_date={movie.release_date}
        overview={movie.overview}
        vote_average={movie.vote_average}
        poster_path={movie.poster_path}/>;
    });
  }

  render() {
    console.log(this.props.retrieveFavorites)
    return (
      <div className='movie-list'>
        {/* {this.state.needToLogin && <Redirect to='/createuser'/>} */}
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
