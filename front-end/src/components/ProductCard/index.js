import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductCardContainer } from '../../styles/baseComponents';
import ProductQty from '../ProductQty';

function ProductCard({ id, image, price, alt, description, onChange }) {
  const [qty, setQty] = useState(0);

  useEffect(() => { onChange(qty); }, [onChange, qty]);

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
  onChange: PropTypes.func,
};

ProductCard.defaultProps = {
  onChange: () => {},
};

export default ProductCard;
