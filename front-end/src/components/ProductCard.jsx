import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';

function ProductCard({ productInfo }) {
  const { name, id, price, urlImage } = productInfo;
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const onClickHandler = (event) => {
    if (event.target.name === 'add-item') {
      setQuantity(Number(quantity) + 1);
    } else if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (cart !== undefined) {
      setCart(cart.map((el) => (
        [el] === name ? { ...el,
          qty: Number(quantity),
          total: (quantity * price).toFixed(2),
        } : { ...el,
          [name]: {
            qty: Number(quantity),
            total: (quantity * price).toFixed(2),
          } })));
    } else {
      setCart([{
        [name]: {
          qty: Number(quantity),
          total: (quantity * price).toFixed(2),
        },
      }]);
    }
  }, [quantity]);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(cart));
  }, [cart]);

  return (
    <div data-testid={ id }>
      <h1 data-testid={ `customer_products__element-card-title-${id}` }>{ name }</h1>
      <img
        style={ { width: '80px' } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <h3 data-testid={ `customer_products__element-card-price-${id}` }>
        { price.toString().replace('.', ',') }
      </h3>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        name="add-item"
        onClick={ onClickHandler }
      >
        +
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        placeholder="0"
        id="quantity"
        min="0"
        value={ quantity }
        onChange={ onChangeHandler }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        name="rm-item"
        onClick={ onClickHandler }
      >
        -
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
