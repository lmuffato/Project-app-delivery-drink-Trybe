import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CartContext from '../contexts/CartContext';

function CheckoutBtn() {
  const { cart, totalPrice, setTotalPrice } = useContext(CartContext);
  const [disableBtn, setDisableBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    function sumPrice() {
      setTotalPrice(cart
        .reduce((sum, cur) => (cur.price ? sum + (cur.price * cur.quantity) : sum), 0));
    }
    sumPrice();
  }, [cart, setTotalPrice]);

  useEffect(() => {
    if (totalPrice > 0) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [totalPrice]);

  function handleClick() {
    history.push('/customer/checkout');
  }

  return (
    <Button
      disabled={ disableBtn }
      data-testid="customer_products__button-cart"
      variant="success"
      onClick={ handleClick }
    >
      Ver carrinho - R$
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { totalPrice.toFixed(2).replace('.', ',') }
      </span>
    </Button>
  );
}

export default CheckoutBtn;
