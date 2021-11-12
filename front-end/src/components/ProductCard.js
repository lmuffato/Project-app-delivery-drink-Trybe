import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {product.price}
      </p>
      <img
        style={ { maxWidth: '200px' } }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        alt="A beautiful product"
        src={ product.url_image }
      />
      <p
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
