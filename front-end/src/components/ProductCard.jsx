import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../contexts/Cart';

function ProductCard({ productInfo }) {
  const { name, id, price, urlImage } = productInfo;
  const { cart, setCart, setTotal } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const onChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const getTotal = (sum, item) => sum + Number(item.subTotal);

  const cartTotal = () => {
    if (cart) {
      setTotal(cart.reduce(getTotal, 0).toFixed(2));
    } else {
      setTotal('0.00');
    }
  };
  const onClickHandler = (event) => {
    if (event.target.name === 'add-item') {
      setQuantity(Number(quantity) + 1);
    } else if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    cartTotal();
  }, [cart]);

  useEffect(() => {
    if (cart !== undefined) {
      const x = -1;
      const index = cart.findIndex((product) => product.productId === id);

      if (index !== x) {
        const newCart = cart;
        newCart[index] = {
          productId: id,
          name,
          quantity: Number(quantity),
          unitPrice: price,
          subTotal: (quantity * price).toFixed(2),
        };

        setCart([...newCart]);
      } else {
        setCart([
          ...cart,
          {
            productId: id,
            name,
            quantity: Number(quantity),
            unitPrice: price,
            subTotal: (quantity * price).toFixed(2),
          },
        ]);
      }
    } else {
      setCart([
        {
          productId: id,
          name,
          quantity: Number(quantity),
          unitPrice: price,
          subTotal: (quantity * price).toFixed(2),
        },
      ]);
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
