import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCartCard({ value, history }) {
  const handleClick = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <button
        id="value"
        type="submit"
        disabled={ value <= 0 }
        data-testid="customer_products__checkout-bottom-value"
        onClick={ handleClick }
      >
        { value.toFixed(2).toString().replace(/\./, ',') }
      </button>
    </div>
  );
}

ShopCartCard.propTypes = {
  value: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
