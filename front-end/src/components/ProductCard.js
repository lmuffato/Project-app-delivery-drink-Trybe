import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart';

function ProductCard({ product }) {
  const { setCart, cartStorage } = useContext(CartContext);
  const [cartItem, setCartItem] = useState();
  const [quantity, setQuantity] = useState(0);

  const { id, name, url_image: urlImage, price } = product;

  const formatPrice = (value) => parseFloat(value).toFixed(2);

  const addProduct = () => {
    setCartItem({
      id,
      name,
      quantity: cartItem ? cartItem.quantity + 1 : 1,
      totalPrice: cartItem
        ? formatPrice((cartItem.quantity + 1) * Number(price))
        : price,
    });

    if (cartStorage && cartStorage[id]) {
      setCartItem({
        ...cartStorage[id],
        quantity: cartStorage[id].quantity + 1,
        totalPrice: formatPrice((cartStorage[id].quantity + 1) * Number(price)),
      });
    }
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    if (quantity > 0) {
      setCartItem({
        ...cartItem,
        quantity: cartItem.quantity - 1,
        totalPrice: formatPrice(Number(cartItem.totalPrice) - Number(price)),
      });
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (cartItem) {
      setCart({ id, item: cartItem });
    }
  }, [cartItem]);

  const insertManuallyQuantity = ({ target: { value } }) => {
    setCartItem({
      id,
      name,
      quantity: Number(value),
      totalPrice: formatPrice(Number(value) * Number(price)),
    });

    setQuantity(value);
  };

  const handleClickAdd = () => addProduct();

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
          onClick={ handleClickAdd }
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
  cartStorage: PropTypes.shape({}),
}.isRequired;

export default ProductCard;
