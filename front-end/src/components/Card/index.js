import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ButtonCard from '../ButtonCard';

function Card({ id, name, price, url }) {
  return (
    <div
      className="cardContainer"
      id={ id }
    >
      <img
        src={ url }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </p>
      <ButtonCard id={ id } />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default Card;
