import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';

function CustomerProducts() {
  const [products] = useState(['a', 'b']);

  return (
    <div>
      <NavBar />
      { products.map((product, index) => (
        <ProductCard product={ product } key={ index } />
      )) }
    </div>
  );
}

export default CustomerProducts;
