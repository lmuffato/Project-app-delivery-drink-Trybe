import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsButton({ history }) {
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

ProductsButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
