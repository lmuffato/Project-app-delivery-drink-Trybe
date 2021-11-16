import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { calcCartTotal } from './ultility';

function CartCard() {
  const [cartTotal, setCartTotal] = useState(0);
  const { cart } = useSelector((state) => state.product);
  const history = useHistory();

  useEffect(() => {
    setCartTotal(calcCartTotal(cart).toFixed(2));
  }, [cart]);

  return (
    <div style={ { backgroundColor: '#90EE90' } }>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ cartTotal === 0 }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          R$
          {`${cartTotal}`.replace('.', ',')}
        </span>
      </button>
    </div>
  );
}

export default CartCard;
