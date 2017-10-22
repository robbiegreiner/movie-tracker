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

  // currently rendering cards with add favorites button..
  // maybe compare favorites to movielist..
  // favorites and movieList
  // return favorites that are in movieList
  // movielist[0].movie_id

  // compareFavsAndMovies(){
  //   const { favorites, movieList } = this.props;
  //   const theFavorites = movieList.map( movie => {
  //     return favorites.filter( favorite => {
  //       return favorite.movie_id !== movie.movie_id;
  //     });
  //   });
  //   const theRealFaves = theFavorites.map( favorite => {
  //       return favorite[0];
  //   });
  //   const theRealRealFaves = theRealFaves.filter( fave => {
  //     return fave !== undefined;
  //   })
  //   console.log(theFavorites);
  // }

  addFavProperty() {
    const { favorites, movieList } = this.props;


    if (favorites.length > 0) {
      const favoritesID = favorites.map(favorite => favorite.movie_id);
      return movieList.map(movie => {
        if (favoritesID.includes(movie.id)) {
          return Object.assign({}, movie, { isFav: true });
        }
        return movie;
      });
    } else {
      return movieList;
    }
  }

  handleFavorites(movie) {
    const { deleteFave } = this.props;

    if (!movie.isFav) {
      this.addFavorites(movie);
    } else {
      deleteFave(movie);
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
