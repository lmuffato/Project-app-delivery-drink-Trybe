/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import '../styles/product.css';
import Context from '../context/Context';

function ProductCard({ product: { id, name, price, urlImage } }) {
  const { addProduct } = useContext(Context);
  // Styles:
  // preço: Absolute inset -1 background-opacity 70%
  // image: fill
  // Div pai: Border 1 grey, shadow
  // Div filho 1: BG White?
  // Div filho 2: BG Aquamarine

  // data testid por key
  return (
    <section className="productContainer">
      <div className="element">
        {/* <h1
          className="absolute"
          data-testid="customer_products__element-card-price-"
        >
          {price}
        </h1> */}
        <img
          src={ urlImage }
          alt="algo"
          data-testid="customer_products__img-card-bg-image-"
        />
      </div>
      <div>
        <span
          className="element"
          data-testid="customer_products__element-card-title-"
        >
          {name}
        </span>
        <div className="element">
          <button
            type="button"
            data-testid="customer_products__button-card-rm-item-"
          >
            -
          </button>
          <input
            type="number"
            placeholder="0"
            data-testid="customer_products__input-card-quantity-"
          />
          <button
            type="button"
            data-testid="customer_products__button-card-add-item-"
            name={ name }
            onClick={ (e) => addProduct(e) }
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
