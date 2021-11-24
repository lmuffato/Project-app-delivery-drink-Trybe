import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const { id, name, url_image: urlImage, price } = product;

  const addProduct = () => setQuantity(quantity + 1);

  const removeProduct = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const insertManuallyQuantity = ({ target: { value } }) => {
    setQuantity(value);
  };

  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price}`}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="Product"
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ removeProduct }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          value={ quantity }
          placeholder="0"
          onChange={ insertManuallyQuantity }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ addProduct }
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
