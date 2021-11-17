import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import CardProducts from '../components/CardProducts';
import NavBar from '../components/NavBar';

function Products() {
  const [disable, setDisable] = useState(true);
  const {
    cartValue,
  } = useContext(DeliveryContext);

  const history = useHistory();

  const checkoutRedirect = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    if (cartValue !== 0) setDisable(false);
  }, [cartValue]);

  return (
    <div>
      <NavBar />
      <CardProducts />
      <button
        disabled={ disable }
        className="buttonCheckout"
        type="button"
        data-testid="customer_products__checkout-bottom-value"
        onClick={ checkoutRedirect }
      >
        { `Ver Carrinho: R$ ${cartValue}` }
      </button>
    </div>
  );
}

export default Products;
