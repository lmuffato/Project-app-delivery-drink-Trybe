import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutContext from '../context/checkoutContext';

function BottomBox() {
  const { total } = useContext(CheckoutContext);
  const result = total.toString().replace('.', ',');

  return (
    <div>
      <Link to={ { pathname: '/customer/checkout' } }>
        <button
          data-testid="customer_products__button-cart"
          className="bottom_cart_button"
          type="button"
        >
          {result}
        </button>
      </Link>
    </div>
  );
}

export default BottomBox;
