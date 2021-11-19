import React, { useContext } from 'react';
import '../../styles/ProductCard.css';
import ProductsContext from '../../context/Products/ProductsContext';

export default function ProductCard() {
  const {
    // count,
    increment,
    decrement,
    products,
    BRL,
    handleChange,
  } = useContext(ProductsContext);

  return (
    products.map((prod) => (
      <div key={ prod.id } className="card-container text-black mb-3">
        <div className="card-body product-card-container">
          <h5
            data-testid={ `customer_products__element-card-title-${prod.id}` }
            className="card-text"
          >
            {prod.name}
          </h5>
          <div className="card-title">
            <h3
              data-testid={ `customer_products__element-card-price-${prod.id}` }
              className="price"
            >
              {BRL(parseFloat(prod.price))}
            </h3>
          </div>
          <img
            data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
            src={ prod.urlImage }
            alt={ prod.name }
            style={ { width: 200 } }
          />
        </div>
        <div className="counter-container">
          <button
            id={ prod.id }
            data-testid={ `customer_products__button-card-add-item-${prod.id}` }
            className="btn-decrement"
            type="button"
            onClick={ (e) => decrement(e) }
          >
            -
          </button>
          <input
            id={ prod.id }
            className="card-header counter"
            value={ prod.count }
            onChange={ (e) => handleChange(e) }
            data-testid={ `customer_products__input-card-quantity-${prod.id}` }
          />
          <button
            id={ prod.id }
            data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
            className="btn-increment"
            type="button"
            onClick={ (e) => increment(e) }
          >
            +
          </button>
        </div>
      </div>
    ))
  );
}
