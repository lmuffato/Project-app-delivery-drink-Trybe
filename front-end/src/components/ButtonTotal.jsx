import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';

function ButtonTotal({ buttonId, isDisabled }) {
  const { total } = useContext(CartContext);
  return (
    <button
      data-testid={ buttonId }
      type="button"
      onClick={ () => navigate('/customer/checkout') }
      disabled={ isDisabled }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        { total.toString().replace('.', ',') }
      </p>
    </button>
  );
}

export default ButtonTotal;

ButtonTotal.propTypes = {
  buttonId: PropTypes.string,
  isDisabled: PropTypes.bool,
}.isRequired;
