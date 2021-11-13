import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCartCard({ value }) {
  return (
    <div>
      <label htmlFor="value">
        <p id="value">{ `ver carrinho: ${value}`}</p>
      </label>
    </div>
  );
}

ShopCartCard.propTypes = {
  value: PropTypes.number.isRequired,
};
