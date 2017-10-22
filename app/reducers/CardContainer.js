import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ favorites, selected, toggleFavorited, ...rest}) => {

  if (selected === 'faves') {
    return favorites.map(fave => {
      
      return <Card
        key={fave}
        toggleFavorited={toggleFavorited}
        {...fave} />;
    });
  }

  const itemValues = rest[selected] || {};
  return Object.values(itemValues).map(item => {
    return <Card
      key={item.url}
      toggleFavorited={toggleFavorited}
      {...item} />;
  });

};

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  saveFavorites: PropTypes.func
};

export default CardContainer;
