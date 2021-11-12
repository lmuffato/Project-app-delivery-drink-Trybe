import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card({ id, name, price, url }) {
  return (
    <div className="cardContainer" id={ id }>
      <img src={ url } alt={ name } />
      <p>{ name }</p>
      <p>{ price }</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
