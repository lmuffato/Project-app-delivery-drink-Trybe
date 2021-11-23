import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryContext from '../Contexts/Deliveries/DeliveryContext';
import CardProducts from '../Components/CardProducts';
import Header from '../Components/Header';

const LINKS = [
  {
    name: 'PRODUTOS',
    url: '/customer/products',
    testId: 'customer_products__element-navbar-link-products',
  },
  {
    name: 'MEUS PEDIDOS',
    url: '/customer/orders',
    testId: 'customer_products__element-navbar-link-orders',
  },
];

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
      <Header links={ LINKS } />
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
