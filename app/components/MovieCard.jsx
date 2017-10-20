import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ id, title, releaseDate, summary, score, img, addFavorites }) => {

  let poster = `https://image.tmdb.org/t/p/w500/${img}`;

  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      <div className="fav-btn" onClick={() => {
        const movieObj = Object.assign({}, {
          movie_id: id,
          title: title,
          overview: summary,
          vote_average: score,
          poster_path: img,
          release_date: releaseDate
        });
        addFavorites(movieObj);
      }}></div>
      <div className="movie-container">
        <img className="movie-image" src={poster} alt="poster" />
        <div className="score-release-container">
          <h4 className="release-date">Release Date</h4>
          <h3 className="release">{releaseDate}</h3>
          <h4 className="rating">User Rating</h4>
          <h3 className="score">{score}</h3>
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
  img: PropTypes.string,
  addFavorites: PropTypes.func,
  id: PropTypes.number
};

export default MovieCard;
