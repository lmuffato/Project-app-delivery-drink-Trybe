import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OrderContext from '../contexts/OrderContext';

function CheckoutBtn() {
  const { order, totalPrice, setTotalPrice } = useContext(OrderContext);
  const history = useHistory();

  useEffect(() => {
    function sumPrice() {
      setTotalPrice(order
        .reduce((sum, cur) => (cur.price ? sum + (cur.price * cur.quantity) : sum), 0));
    }
    sumPrice();
  }, [order]);

  function handleClick() {
    history.push('/customer/checkout');
  }

  return (
    <Button
      data-testid="customer_products__checkout-bottom-value"
      variant="success"
      onClick={ handleClick }
    >
      { `Ver carrinho $${totalPrice.toFixed(2)}` }
    </Button>
  );
}

export default CheckoutBtn;
