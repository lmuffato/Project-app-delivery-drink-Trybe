import React from 'react';
import PropTypes from 'prop-types';

import '../styles/customerProductsStyle.css';

export default function CheckOutButton({ value, history }) {
  const handleClick = () => {
    history.push('/customer/checkout');
  };

  return (
    <div>
      <button
        data-testid="customer_products__button-cart"
        type="submit"
        disabled={ value <= 0 }
        onClick={ handleClick }
        className="checkout-btn"
      >
        CheckOut
      </button>
    </div>
  );
}

CheckOutButton.propTypes = {
  value: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
