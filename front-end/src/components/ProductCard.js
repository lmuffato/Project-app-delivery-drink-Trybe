import React from 'react';
import PropTypes from 'prop-types';
import '../styles/productCard.css';

function ProductCard({ product }) {
  const { id, name, url_image: urlImage } = product;
  const value = product.price.replace('.', ',');

  return (
    <div className="productCard">
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { value }
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="Product"
        className="imageCard"
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          // onClick={ removeProduct }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ 0 }
          type="text"
          placeholder="0"
          // onChange={ insertManuallyQuantity }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          // onClick={ addProduct }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url_image: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
