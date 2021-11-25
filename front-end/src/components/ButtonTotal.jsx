import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';

function ButtonTotal({ buttonId, isDisabled }) {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => (
    cart.map((item) => item.subTotal)
      .reduce((acc, curr) => Number(acc) + Number(curr), 0));

  const total = cart ? calculateTotal() : 0;
  return (
    <button
      data-testid={ buttonId }
      type="button"
      onClick={ () => navigate('/customer/checkout') }
      disabled={ isDisabled }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        { Number(total).toLocaleString('pt-BR', {
          currency: 'BRL',
          minimumFractionDigits: 2,
        }) }
      </p>
    </button>
  );
}

export default ButtonTotal;

ButtonTotal.propTypes = {
  buttonId: PropTypes.string,
  isDisabled: PropTypes.bool,
}.isRequired;
