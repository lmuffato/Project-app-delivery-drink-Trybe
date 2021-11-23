/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import DeliveryContext from '../../Contexts/Deliveries/DeliveryContext';

function CardProducts() {
  const {
    products,
    quantityProducts,
    setQuantityProducts,
    setCartValue,
  } = useContext(DeliveryContext);

  const handlechange = ({ value = 0, id }) => {
    const unitQuantity = quantityProducts;
    const newUnitQuantity = { ...unitQuantity, [id]: Number(value) };
    setQuantityProducts(newUnitQuantity);
  };

  const cartButtonValue = () => {
    let value = 0;
    Object.entries(quantityProducts).forEach((qtdProduct) => {
      const { price } = products.find((product) => product.id === Number(qtdProduct[0]));
      value += qtdProduct[1] * price;
    });
    setCartValue(value.toFixed(2));
  };

  const handleClick = (operator, id) => {
    let quantity = quantityProducts[id];
    if (operator === '-' && quantity > 0) {
      quantity -= 1;
    }
    if (operator === '+') {
      quantity += 1;
    }
    const newUnitQuantity = { ...quantityProducts, [id]: quantity };
    setQuantityProducts(newUnitQuantity);
  };

  useEffect(() => {
    const quantity = {};
    products.forEach((product) => {
      quantity[product.id] = 0;
    });
    setQuantityProducts(quantity);
  }, [products]);

  useEffect(() => {
    cartButtonValue();
  }, [quantityProducts]);

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
              onClick={ () => handleClick('-', product.id) }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              value={ quantityProducts[product.id] }
              onChange={ ({ target }) => (
                handlechange({ value: target.value, id: product.id })
              ) }
            />
            <button
              type="button"
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              onClick={ () => handleClick('+', product.id) }
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
