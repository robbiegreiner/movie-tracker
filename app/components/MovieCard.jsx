import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie_id, title, releaseDate, overview, vote_average, poster_path, addFavorites }) => {

  let poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className='movie-card'>
      <div className="flip-container" >
        <div className="flipper">
          <div className="front">
            <img className="movie-image" src={poster} alt="poster" />
          </div>
          <div className="back">
            <h4 className="release-date">Release Date</h4>
            <h3 className="release">{releaseDate}</h3>
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
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  poster_path: PropTypes.string,
  addFavorites: PropTypes.func,
  movie_id: PropTypes.number
};

export default MovieCard;
