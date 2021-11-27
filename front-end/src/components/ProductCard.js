import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart';
import '../styles/productCard.css';

function ProductCard({ product }) {
  const { setCart, cartStorage } = useContext(CartContext);
  const [cartItem, setCartItem] = useState();
  const [quantity, setQuantity] = useState(0);

  const { id, name, url_image: urlImage, price } = product;
  const productPrice = product.price.replace('.', ',');

  const formatPrice = (value) => parseFloat(value).toFixed(2);

  const addProduct = () => {
    setCartItem({
      productId: id,
      name,
      quantity: cartItem ? cartItem.quantity + 1 : 1,
      unitPrice: price,
      subTotal: cartItem
        ? formatPrice((cartItem.quantity + 1) * Number(price))
        : price,
    });

    if (cartStorage && cartStorage[id]) {
      setCartItem({
        ...cartStorage[id],
        quantity: cartStorage[id].quantity + 1,
        subTotal: formatPrice((cartStorage[id].quantity + 1) * Number(price)),
      });
    }
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    if (quantity > 0) {
      setCartItem({
        ...cartItem,
        quantity: cartItem.quantity - 1,
        subTotal: formatPrice(Number(cartItem.subTotal) - Number(price)),
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
      productId: id,
      name,
      quantity: Number(value),
      unitPrice: price,
      subTotal: formatPrice(Number(value) * Number(price)),
    });

    setQuantity(value);
  };

  const handleClickAdd = () => addProduct();

  return (
    <div className="productCard">
      <p>
        R$
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {productPrice}
        </span>
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="Product"
        className="imageCard"
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
