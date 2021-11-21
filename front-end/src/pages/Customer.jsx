import React from 'react';
import { useHistory } from 'react-router-dom';
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
    { name: 'CARRINHO',
      value: 'cart',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];
  const history = useHistory();
  const location = history.location.pathname;
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.name;

  if (!user) history.push('/login');

  return (
    <div className="w-full h-full bg-gray-500">
      <NavBar buttonsList={ buttonsList } clientName={ username } />
      {
        location === '/customer/products'
          ? <ProductList token={ user.token } />
          : <span>aeaeae</span>
      }
    </div>
  );
}
