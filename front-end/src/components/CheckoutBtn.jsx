import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartContext from '../contexts/CartContext';

function CheckoutBtn() {
  const { cart, totalPrice, setTotalPrice } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    function sumPrice() {
      setTotalPrice(cart
        .reduce((sum, cur) => (cur.price ? sum + (cur.price * cur.quantity) : sum), 0));
    }
    sumPrice();
  }, [cart, setTotalPrice]);

  function handleClick() {
    history.push('/customer/checkout');
  }

  return (
    <Button
      data-testid="customer_products__checkout-bottom-value"
      variant="success"
      onClick={ handleClick }
    >
      { totalPrice.toFixed(2) }
    </Button>
  );
}

export default CheckoutBtn;
