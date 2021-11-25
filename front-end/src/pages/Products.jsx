import React from 'react';
import NavBar from '../components/NavBar';
import ProductsList from '../components/ProductsList';
import { ProductsProvider } from '../contexts/Products';
import { CartProvider } from '../contexts/Cart';

function Products() {
  return (
    <>
      <NavBar />
      <ProductsProvider>
        <CartProvider>
          <ProductsList />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default Products;
