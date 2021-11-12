import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function CardProducts() {
  const {
    products,
    quantityProducts,
    cartValue,
  } = useContext(DeliveryContext);

  return (
    <div>
      <div className="cards">
        {products.map((product) => (
          <div key={ product.id } className="cardProduct">
            <img
              src={ product.urlImage }
              alt="produto"
              data-testid="customer_products__img-card-bg-image-"
            />
            <h3
              data-testid="customer_products__element-card-title-"
            >
              {product.name}
            </h3>
            <h3
              data-testid="customer_products__element-card-price-"
            >
              {`R$ ${product.price}`}
            </h3>
            <div className="buttons">
              <button
                type="button"
                data-testid="customer_products__button-card-rm-item-"
              >
                -
              </button>
              <p
                data-testid="customer_products__input-card-quantity-"
              >
                { quantityProducts }
              </p>
              <button
                type="button"
                data-testid="customer_products__button-card-add-item-"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="buttonCheckout"
        type="button"
        data-testid="customer_products__checkout-bottom-value"
      >
        { `Ver Carrinho: R$ ${cartValue}` }
      </button>
    </div>
  );
}

export default CardProducts;
