import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, addFavorites }) => {

  const { movie_id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path } = movie;

  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="movie-card">
      <div className="flip-container" >
        <div className="flipper">
          <div className="front">
            <div className="fav-btn" onClick={() => {
              const movieObj = Object.assign({}, {
                movie_id,
                title,
                overview,
                vote_average,
                poster_path,
                release_date
              });
              addFavorites(movieObj);
            }}></div>
            <img className="movie-image" src={poster} alt="poster" />
          </div>
          <div className="back">
            <div className="fav-btn" onClick={() => {
              const movieObj = Object.assign({}, {
                movie_id,
                title,
                overview,
                vote_average,
                poster_path,
                release_date
              });
              addFavorites(movieObj);
            }}></div>
            <img className="movie-image-back" src={poster} alt="poster" />
            <div className="card-text">
              <h1 className="movie-title">{title}</h1>
              <h2 className="score">Score: {vote_average}</h2>
              <p>{overview}</p>
              <h4 className="release">In theaters: {release_date}</h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  addFavorites: PropTypes.func
};

export default MovieCard;
