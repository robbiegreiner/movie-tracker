import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, handleFavorites }) => {

  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const favClass = movie.isFav ? "favClass" : "fav-btn";

  return (
    <div className='movie-card'>
      <div className="flip-container"
        tabIndex={0}
        onKeyDown={(event) => {
          const key = event.which;
          if (key === 13) {
            handleFavorites(movie);
          }
        }}>
        <div className="flipper">
          <div className="front">
            <div className={`${favClass}`} onClick={() => {
              handleFavorites(movie);
            }}></div>
            <img className="movie-image"
              src={poster}
              alt={`A promotional poster for the movie ${movie.title}`} />
          </div>
          <div className="back">
            <div className={`${favClass}`} onClick={() => {
              handleFavorites(movie);
            }}></div>
            <img className="movie-image-back"
              src={poster}
              alt={`A promotional poster for the movie ${movie.title}`} />
            <div className="card-text">
              <h1 className="movie-title">{movie.title}</h1>
              <h2 className="score">Score: {movie.vote_average}</h2>
              <p>{movie.overview}</p>
              <h4 className="release">In theaters: {movie.release_date}</h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  handleFavorites: PropTypes.func
};

export default MovieCard;
