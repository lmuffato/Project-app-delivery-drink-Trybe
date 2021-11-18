import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({ id, drink, cost, thumb }) => (
  <div key={ id }>
    <img
      alt="drink"
      data-testid={ `customer_products__element-card-price-${id}` }
      src={ thumb }
    />
    <div className="">
      <h5>{drink}</h5>
      <p>{cost}</p>
    </div>
  </div>
);

CardProduct.propTypes = {
  key: PropTypes.string,
  drink: PropTypes.string,
  cost: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;

export default CardProduct;
