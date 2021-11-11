import React from 'react';
import '../styles/product.css';
// import Context from '../context/Context';

function ProductCard(props) {
  console.log(props);
  // const { } = useContext(Context);

  // Styles:
  // preço: Absolute inset -1 background-opacity 70%
  // image: fill
  // Div pai: Border 1 grey, shadow
  // Div filho 1: BG White?
  // Div filho 2: BG Aquamarine

  return (
    <section className="productContainer">
      <div className="element">
        <h1
          className="absolute"
          data-testid="customer_products__element-card-price-"
        >
          Preço
        </h1>
        <img src="algo" alt="algo" data-testid="customer_products__img-card-bg-image-" />
      </div>
      <div>
        <span
          className="element"
          data-testid="customer_products__element-card-title-"
        >
          Nome do Produto
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
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
