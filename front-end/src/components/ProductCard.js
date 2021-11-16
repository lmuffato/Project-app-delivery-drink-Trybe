import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addProductToCart } from '../redux/slices/productSlice';

const handleQtyClick = (ev, sign, currQty, setterFn) => {
  ev.preventDefault();

  if (sign === '+') {
    setterFn(currQty + 1);
  }

  if (sign === '-' && currQty > 0) {
    setterFn(currQty - 1);
  }
};

const handleQtyChange = (ev, setterFn) => {
  ev.preventDefault();
  const { value } = ev.target;

  if (value >= 0) {
    setterFn(+value);
  }
};

function ProductCard({ product }) {
  const [productQty, setProductQty] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProductToCart({ ...product, quantity: productQty }));
  }, [productQty, dispatch, product]);

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {product.price.replace('.', ',')}
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
        onClick={ (ev) => handleQtyClick(ev, '-', productQty, setProductQty) }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ productQty }
        onChange={ (ev) => handleQtyChange(ev, setProductQty) }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ (ev) => handleQtyClick(ev, '+', productQty, setProductQty) }
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
