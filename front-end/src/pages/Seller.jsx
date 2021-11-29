import React from 'react';
import SalesList from '../components/SalesList';
import NavBar from '../components/NavBar';

export default function Seller() {
  const buttonsList = [
    { name: 'MEUS PEDIDOS',
      value: 'orders',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];
  const { username, token } = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="w-full h-full bg-gray-500">
      <NavBar buttonsList={ buttonsList } clientName={ username } />
      <div className="flex content-center">
        {
          // renderizar lista de cards das vendas.
          <SalesList token={ token } />
        }
      </div>
    </div>
  );
}
