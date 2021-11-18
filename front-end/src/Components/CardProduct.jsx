import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({ key, drink, cost, thumb }) => (
  <div key={ key }>
    <img
      alt="drink"
      data-testid=""
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
