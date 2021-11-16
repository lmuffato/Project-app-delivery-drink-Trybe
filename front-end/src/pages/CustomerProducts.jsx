import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ApiContext from '../context/ApiContext';

function CustomerProducts() {
  const { products } = useContext(ApiContext);
  return (
    <div>
      { products.map((product, index) => (
        <ProductCard
          key={ index }
          id={ product.id }
          price={ product.price }
          name={ product.name }
          image={ product.url_image }
        />
      )) }
    </div>
  );
}

export default CustomerProducts;
