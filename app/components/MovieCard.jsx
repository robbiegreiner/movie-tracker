import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, releaseDate, summary, score, img }) => {

  let poster = `https://image.tmdb.org/t/p/w500/${img}`;

  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      <div className="fav-btn"></div>
      <div className="movie-container">
        <img className="movie-image" src={poster} alt="poster" />
        <div className="score-release-container">
          <h4>Release Date</h4>
          <h3 className="release">{releaseDate}</h3>
          <h4 className="rating">User Rating</h4>
          <h3>{score}</h3>
        </div>
      </div>
      <p>{summary}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  summary: PropTypes.string,
  score: PropTypes.number,
  img: PropTypes.string
};

export default MovieCard;


// let backDrop = `https://image.tmdb.org/t/p/w500${poster_path}`;
// <img className="movie-image" src={backDrop} alt="backdrop image" />
