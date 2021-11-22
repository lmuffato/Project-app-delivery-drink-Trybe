import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct, deleteItem } from '../../slices/cart';
import { ProductCardContainer } from '../../styles/baseComponents';
import ProductQty from '../ProductQty';

function useMounted() {
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}

function ProductCard({ id, image, price, alt, description/* , initialQty */ }) {
  const prod = useSelector((st) => st.cart.products.find((p) => p.id === id));
  const dispatch = useDispatch();
  const isMounted = useMounted();

  const [qty, setQty] = useState(prod ? prod.quantity : 0);

  useEffect(() => {
    if (isMounted) {
      if (qty === 0) {
        dispatch(deleteItem({ id }));
        return;
      }
      dispatch(updateProduct({ id, quantity: qty }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  const inputChange = ({ target: { value } }) => {
    console.log(value);
    const qt = Number(value);
    if (Number.isNaN(qt)) return;

    const quantity = qt <= 0 ? 0 : qt;
    setQty(quantity);
  };

  function remove() {
    setQty((st) => ((st - 1) <= 0 ? 0 : (st - 1)));
  }
  function add() {
    setQty((st) => st + 1);
  }

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
  // initialQty: PropTypes.number,
};

// ProductCard.defaultProps = {
//   initialQty: 0,
// };

export default ProductCard;
