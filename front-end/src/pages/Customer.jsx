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
  ];
  const history = useHistory();
  const location = history.location.pathname;
  const username = 'Fulana';

  return (
    <div className="w-screen flex flex-col h-full">
      <NavBar buttonsList={ buttonsList } clientName={ username } />
      {
        location === '/customer/products'
          ? <ProductList />
          : <span>aeaeae</span>
      }
    </div>
  );
}
