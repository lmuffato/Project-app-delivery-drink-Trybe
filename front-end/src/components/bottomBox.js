import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BottomBox({ value }) {
  return (
    <div>
      <Link to={ { pathname: '/customer/checkout' } }>
        <button
          data-testid="customer_products__checkout-bottom-value"
          className="bottom_cart_button"
          type="button"
        >
          Ver Carrinho:
          <span>
            { ` R$: ${value}` }
          </span>
        </button>
      </Link>
    </div>
  );
}

BottomBox.propTypes = {
  value: PropTypes.number.isRequired,
};

export default BottomBox;
