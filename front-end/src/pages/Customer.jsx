import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Checkout from '../components/Checkout';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';

export default function Customer() {
  const buttonsList = [
    { name: 'PRODUTOS',
      value: 'products',
      testId: 'customer_products__element-navbar-link-products',
    },
    { name: 'MEUS PEDIDOS',
      value: 'orders',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];
  const history = useHistory();
  const location = history.location.pathname;
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.name;
  const shoppingCart = useSelector((state) => state.shoppingCart.cartItems);
  const [totalCart, setTotalCart] = useState(0);
  const [isVisible, setIsVisible] = useState('visible');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (shoppingCart.length > 0) {
      let total = 0;
      shoppingCart.forEach((element) => {
        total += element.subtotal;
      });
      setTotalCart(total.toFixed(2).split('.').join(','));
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [shoppingCart]);

  useEffect(() => {
    if (location === '/customer/products') {
      setIsVisible('visible');
    } else {
      setIsVisible('hidden');
    }
  }, [location]);

  if (!user) history.push('/login');

  const renderComponent = (url) => {
    switch (url) {
    case '/customer/orders':
      return (<span>hdaushduash</span>);
    case '/customer/checkout':
      return (<Checkout totalCart={ totalCart } />);
    default:
      return (<ProductList token={ user.token } />);
    }
  };

  return (
    <div className="w-full h-full bg-gray-500">
      <NavBar buttonsList={ buttonsList } clientName={ username } />
      <div className="flex content-center">
        { renderComponent(location) }
        <button
          data-testid="customer_products__button-cart"
          type="button"
          className={ `fixed text-center text-white right-5 align-top w-40 h-12 mt-40
          bg-indigo-600 hover:bg-indigo-700 tex-black rounded-md ${isVisible}` }
          onClick={ () => history.push('/customer/checkout') }
          disabled={ disabled }
        >
          <p>Carrinho</p>
          <div className="flex justify-center">
            <p>R$</p>
            <p data-testid="customer_products__checkout-bottom-value">{totalCart}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
