import React from 'react';
import PropTypes from 'prop-types';
import ButtonCard from '../ButtonCard';
// import './style.css';

function Card({ id, name, price, url }) {
  return (
    <div
      className="cardContainer"
      id={ id }
    >
      <img
        style={ { width: '10px' } }
        src={ url }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        {' '}
        { price.replace('.', ',') }
      </p>
      <ButtonCard id={ id } name={ name } price={ price } />
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
