import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart';

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const { id, name, url_image: urlImage, price } = product;

  useEffect(() => {
    if (cart[id]?.quantity === 0) {
      const array = Object.entries(cart).filter(
        ({ quantity }) => quantity !== 0,
      );
      const filtered = array.filter((value) => value[1].quantity !== 0);
      const validProducts = Object.fromEntries(filtered);
      setCart(validProducts);
    }
  }, [cart]);

  const formatPrice = (value) => parseFloat(value).toFixed(2);

  const addProduct = (value) => {
    if (cart[id]) {
      setCart({
        ...cart,
        [id]: {
          ...cart[id],
          quantity: Number(value) || cart[id].quantity + 1,
          totalPrice: value
            ? formatPrice(Number(value) * Number(price))
            : formatPrice((cart[id].quantity + 1) * Number(price)),
        },
      });
    } else {
      setCart({
        ...cart,
        [id]: {
          name,
          quantity: Number(value) || 1,
          totalPrice: formatPrice(Number(price)),
        },
      });
    }
  };

  const removeProduct = () => {
    if (cart[id].quantity > 0) {
      setCart({
        ...cart,
        [id]: {
          ...cart[id],
          quantity: cart[id].quantity - 1,
          totalPrice: formatPrice(Number(cart[id].totalPrice) - Number(price)),
        },
      });
    }
  };

  const insertManuallyQuantity = ({ target: { value } }) => {
    addProduct(value);
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
          value={ cart[id]?.quantity || 0 }
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
};

export default ProductCard;
