import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CheckoutContext from '../context/checkoutContext';

function BottomBox() {
  const { totalValue } = useContext(CheckoutContext);
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
            { ` R$: ${Math.round(totalValue * 100) / 100}` }
          </span>
        </button>
      </Link>
    </div>
  );
}

export default BottomBox;
