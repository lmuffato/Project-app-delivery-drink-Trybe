import React from 'react';
import NavBar from '../components/NavBar';
import ProductsList from '../components/ProductsList';
import { ProductsProvider } from '../contexts/Products';

const testIds = {
  pageProductsId: 'customer_products__element-navbar-link-products',
  pageOrdersId: 'customer_products__element-navbar-link-orders',
  userId: 'customer_products__element-navbar-user-full-name',
};

const navegationNames = {
  pageName: 'Meus pedidos',
};

function Products() {
  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      <ProductsProvider>
        <ProductsList />
      </ProductsProvider>
    </>
  );
}

export default Products;
