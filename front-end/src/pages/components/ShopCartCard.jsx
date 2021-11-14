import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCartCard({ value, history }) {
  const handleClick = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <label htmlFor="value">
        <input
          id="value"
          value={ `Ver Carrinho: ${parseFloat(value).toFixed(2)}` }
          data-testid="customer_products__checkout-bottom-value"
          onClick={ handleClick }
        />
      </label>
    </div>
  );
}

ShopCartCard.propTypes = {
  value: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
