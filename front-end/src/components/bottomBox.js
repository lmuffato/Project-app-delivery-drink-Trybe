import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/checkoutContext';

function BottomBox() {
  const { total } = useContext(CheckoutContext);
  const [disabled, setDisabled] = useState(true);
  const result = total.toFixed(2).toString().replace('.', ',');
  const history = useHistory();
  useEffect(() => {
    if (total > 0) setDisabled(false);
    if (total === 0) setDisabled(true);
  }, [total]);

  function redirectFunction() {
    history.push('/customer/checkout');
  }
  return (
    <div
      style={ { position: 'fixed', right: 0, bottom: 0 } }
    >
      <button
        data-testid="customer_products__button-cart"
        className="bottom_cart_button"
        type="button"
        onClick={ redirectFunction }
        disabled={ disabled }

      >
        <p data-testid="customer_products__checkout-bottom-value">
          {`R$:${result}`}
        </p>
      </button>
    </div>
  );
}

export default BottomBox;
