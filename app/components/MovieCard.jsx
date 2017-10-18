import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ key, title, releaseDate, summary, score, img }) => {

  return (
    <div className='movie-card'>
      <p>{title}</p>
    </div>
  );
};

MovieCard.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  summary: PropTypes.string,
  score: PropTypes.number,
  img: PropTypes.string
};

export default MovieCard;
