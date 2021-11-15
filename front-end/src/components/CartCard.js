import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const calcCartTotal = (cart) => cart
  .reduce((acc, prod) => acc + (Number(prod.price) * prod.quantity), 0);

function CartCard() {
  const [cartTotal, setCartTotal] = useState(0);
  const { cart } = useSelector((state) => state.product);

  useEffect(() => {
    setCartTotal(calcCartTotal(cart));
  }, [cart]);

  return (
    <div style={ { backgroundColor: '#90EE90' } }>
      <p data-testid="customer_products__checkout-bottom-value">
        R$
        {`${cartTotal}`.replace('.', ',')}
      </p>
    </div>
  );
}

export default CartCard;
