import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutContext from '../context/checkoutContext';

function BottomBox() {
  const { total } = useContext(CheckoutContext);
  const [disabled, setDisabled] = useState(true);
  const result = total.toFixed(2).toString().replace('.', ',');

  useEffect(() => {
    if (total > 0) setDisabled(false);
    if (total === 0) setDisabled(true);
  }, [total]);

  return (
    <div>
      <Link to={ { pathname: '/customer/checkout' } }>
        <button
          data-testid="customer_products__button-cart"
          className="bottom_cart_button"
          type="button"
          disabled={ disabled }
        >
          <p data-testid="customer_products__checkout-bottom-value">
            {`R$:${result}`}
          </p>
        </button>
      </Link>
    </div>
  );
}

export default BottomBox;
