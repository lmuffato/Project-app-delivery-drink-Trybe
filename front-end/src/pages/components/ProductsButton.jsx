import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProductsButton() {
  const history = useHistory();
  const handleProductsClick = () => {
    history.push('/customer/products');
  };

  return (
    <div>
      <label htmlFor="products-btn">
        <input
          id="products-btn"
          value="PRODUTOS"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ handleProductsClick }
        />
      </label>
    </div>
  );
}
