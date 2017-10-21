import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, addFavorites }) => {

  const { release_date,
    overview,
    vote_average,
    poster_path } = movie;

  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className='movie-card'>
      <div className="flip-container" >
        <div className="flipper">
          <div className="front">
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
            <h4 className="release-date">Release Date</h4>
            <h3 className="release">{release_date}</h3>
            <h4 className="rating">User Rating</h4>
            <h3 className="score">{vote_average}</h3>
            <p>{overview}</p>
          </div>
        </div>
      </div>



      {/* <h2>{title}</h2>
      <div className="fav-btn" onClick={() => {
        const movieObj = Object.assign({}, {
          movie_id,
          title,
          overview,
          vote_average,
          poster_path,
          releaseDate
        });
        addFavorites(movieObj);
      }}></div>
      <div className="movie-container">
        <img className="movie-image" src={poster} alt="poster" />
        <div className="score-release-container">
          <h4 className="release-date">Release Date</h4>
          <h3 className="release">{releaseDate}</h3>
          <h4 className="rating">User Rating</h4>
          <h3 className="score">{vote_average}</h3>
        </div>
      </div>
      <p>{overview}</p> */}
    </div>
  );
};







MovieCard.propTypes = {
  movie: PropTypes.object,
  addFavorites: PropTypes.func
};

export default MovieCard;
