import React from 'react';
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
    url: '/orders',
    testId: 'customer_products__element-navbar-link-orders',
  },
];

function Products() {
  return (
    <div>
      <Header links={ LINKS } />
      <CardProducts />
    </div>
  );
}

export default Products;
