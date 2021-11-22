import React, { useContext } from 'react';
import { shape, string } from 'prop-types';
import '../styles/product.css';
import Context from '../context/Context';

function ProductCard({ product: { id, name, price, url_image: urlImage } }) {
  const { addProduct, subProduct, inputProduct } = useContext(Context);

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

ProductCard.propTypes = {
  product: shape({
    id: string,
    name: string,
    url_image: string,
    price: string,
  }),
}.isRequired;

export default ProductCard;
