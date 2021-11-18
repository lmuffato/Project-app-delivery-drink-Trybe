import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckoutContext from '../context/checkoutContext';

function BottomBox() {
  const { totalValue, setTotalValue } = useContext(CheckoutContext);
  useEffect(() => {
    setTotalValue(totalValue);
  }, [totalValue]);
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
            { ` R$: ${totalValue}` }
          </span>
        </button>
      </Link>
    </div>
  );
}

export default BottomBox;
