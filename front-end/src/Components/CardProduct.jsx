/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CardProduct = ({ props }) => (
  props
    ? props.map((drink, index) => (
      <div key={ index }>
        <img
          alt="drink"
          data-testid=""
          src={ drink.thumb }
        />
        <div className="">
          <h5>{drink.name}</h5>
          <p>{drink.cost}</p>
        </div>
      </div>
    ))
    : <p>Sem produtos</p>
);

CardProduct.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.object,
    }),
  ),
  map: PropTypes.func,
};

export default CardProduct;
