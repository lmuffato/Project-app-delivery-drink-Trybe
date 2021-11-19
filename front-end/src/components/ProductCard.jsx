import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';

function ProductCard({ productInfo }) {
  const { name, id, price, urlImage } = productInfo;
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
      const entries = Object.entries(JSON.parse(localStorage.getItem('carrinho')));
      const beer = entries.find((value) => value[0] === name);
      return beer ? beer[1] : 0;
    }
    return null;
  });

  const onChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const onClickHandler = (event) => {
    if (event.target.name === 'add-item') {
      setQuantity(quantity + 1);
    } else if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setCart({
      ...cart,
      [name]: {
        qty: Number(quantity),
        total: quantity * price,
      },
    });
  }, [quantity]);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(cart));
  }, [cart]);

  return (
    <div data-testid={ id }>
      <h1>{ name }</h1>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <h3 data-testid={ `customer_products__element-card-price-${id}` }>
        { `R$ ${price}` }
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
