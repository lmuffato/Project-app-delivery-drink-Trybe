/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import '../styles/product.css';
import Context from '../context/Context';

function ProductCard({ product: { id, name, price, urlImage } }) {
  const { addProduct, subProduct, inputProduct } = useContext(Context);
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
        <h1
          // className="absolute"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price}
        </h1>
        <img
          src={ urlImage }
          alt="algo"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div>
        <span
          className="element"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </span>
        <div className="element">
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => subProduct(name, id, price) }
          >
            -
          </button>
          <input
            type="number"
            placeholder="0"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ (e) => inputProduct(name, id, price, e.target.value) }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => addProduct(name, id, price) }
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
