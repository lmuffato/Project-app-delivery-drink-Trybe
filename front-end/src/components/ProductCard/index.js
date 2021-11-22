import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProductCardContainer } from '../../styles/baseComponents';
import ProductQty from '../ProductQty';

function ProductCard({ id, image, price, alt, description, initialQty }) {
  const [qty, setQty] = useState(initialQty);

  const inputChange = ({ target: { value } }) => {
    const qt = Number(value);
    setQty(qt < 0 || Number.isNaN(qt) ? 0 : qt);
  };

  function remove() { setQty((st) => ((st - 1) <= 0 ? 0 : (st - 1))); }
  function add() { setQty((st) => st + 1); }

  return (
    <ProductCardContainer>
      <div
        className="product-price"
      >
        R$
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {(price || 0).toFixed(2).replace('.', ',')}
        </span>
      </div>
      <div
        className="product-image"
      >
        <img
          src={ image }
          alt={ alt }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="product-quantity">
        <ProductQty
          id={ id }
          label={ description }
          value={ qty }
          onRemove={ remove }
          onAdd={ add }
          onChange={ inputChange }
        />
      </div>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initialQty: PropTypes.number,
};

ProductCard.defaultProps = {
  initialQty: 0,
};

export default ProductCard;
