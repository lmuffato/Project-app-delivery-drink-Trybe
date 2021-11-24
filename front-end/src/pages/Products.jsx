import React from 'react';
import NavBar from '../components/NavBar';
import ProductsList from '../components/ProductsList';
import { ProductsProvider } from '../contexts/Products';

function Products() {
  return (
    <>
      <NavBar />
      <ProductsProvider>
        <ProductsList />
      </ProductsProvider>
    </>
  );
}

export default Products;
