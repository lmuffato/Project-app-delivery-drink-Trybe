import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import ApiContext from '../context/ApiContext';
import ProductListContext from '../context/ProductListContext';

function CustomerProducts() {
  const { products } = useContext(ApiContext);
  const { totalPrice } = useContext(ProductListContext);
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
      <p data-testid="customer_products__checkout-bottom-value">
        {`R$ ${totalPrice}`}
      </p>
    </div>
  );
}

export default CustomerProducts;
