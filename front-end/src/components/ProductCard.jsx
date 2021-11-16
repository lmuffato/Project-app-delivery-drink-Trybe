import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ProductCard({ id, price, image, name }) {
  const [quantity, setQuantity] = useState(0);

  const rmvItem = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price }
      </span>
      <img
        alt="Imagem do produto"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        width="300px"
        height="300px"
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </span>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ rmvItem }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          disabled
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ addItem }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default ProductCard;
