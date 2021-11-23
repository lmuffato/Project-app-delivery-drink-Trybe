import React, { useContext, useEffect, useState } from 'react';
import { shape, string } from 'prop-types';
import '../styles/product.css';
import Context from '../context/Context';

function ProductCard({ product }) {
  const { shoppingCart, setShoppingCart } = useContext(Context);
  const { id, name, price, url_image: urlImage } = product;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity === 0) {
      const updatedShoppingCart = { ...shoppingCart };
      delete updatedShoppingCart[id];
      setShoppingCart(updatedShoppingCart);
    } else {
      setShoppingCart({ ...shoppingCart,
        [id]: {
          productId: id, productName: name, productPrice: price, productQuant: quantity,
        } });
    }
  }, [quantity]); // eslint-disable-line

  return (
    <section className="productContainer">
      <div className="element">
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price.replace('.', ',')}
        </span>
        <img
          src={ urlImage }
          style={ { width: 20 } }
          alt="algo"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div>
        <h1
          className="element"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </h1>
        <div className="element">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => quantity > 0 && setQuantity(quantity - 1) }
          >
            -
          </button>
          <input
            type="number"
            name={ `product-${id}` }
            placeholder="0"
            value={ quantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ ({ target: { value } }) => Number(value) >= 0
              && setQuantity(Number(value)) }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  product: shape({
    id: string,
    name: string,
    url_image: string,
    price: string,
  }),
}.isRequired;

export default ProductCard;
