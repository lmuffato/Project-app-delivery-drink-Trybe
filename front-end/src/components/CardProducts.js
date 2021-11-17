import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function CardProducts() {
  const {
    products,
    quantityProducts,
    setQuantityProducts,
  } = useContext(DeliveryContext);

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={ product.id } className="cardProduct">
          <img
            src={ product.url_image }
            alt="produto"
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <h3
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </h3>
          <h3
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {`${product.price.replace('.', ',')}`}
          </h3>
          <div className="buttons">
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              value={ quantityProducts }
              onChange={ (e) => setQuantityProducts(e.target.value) }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProducts;
