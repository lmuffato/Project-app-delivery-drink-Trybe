import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function ProductCard({ product, index, callback }) {
  const { url_image: urlImage, name, price } = product;
  let { quantity } = product;
  const { products, setProducts } = useContext(ContextDeliveryApp);
  const [qty, setQty] = useState(quantity);

  const handleRemoveClick = () => {
    if (qty > 0) {
      const updatingProducts = products;
      updatingProducts[index].quantity -= 1;
      setProducts(updatingProducts);
      setQty(qty - 1);
      callback(updatingProducts);
    }
  };

  useEffect(() => {
    quantity = products[index].quantity;
  }, [qty]);

  const handleAddClick = () => {
    const updatingProducts = products;
    updatingProducts[index].quantity += 1;
    setProducts(updatingProducts);
    setQty(qty + 1);
    callback(updatingProducts);
  };

  return (
    <div>
      <img
        src={ urlImage }
        id="product-image"
        data-testid="customer_products__img-card-bg-image-"
        alt={ name }
      />
      <p
        id="product-name"
        data-testid="customer_products__element-card-title-"
      >
        { name }
      </p>
      <p
        id="product-price"
        data-testid="customer_products__element-card-price-"
      >
        { price }
      </p>
      <label htmlFor="remove-button">
        <input
          id="remove-button"
          type="button"
          value="-"
          onClick={ handleRemoveClick }
          data-testid="customer_products__button-card-rm-item-"
        />
      </label>
      <p
        id="product-quantity"
        data-testid="customer_products__input-card-quantity-"
      >
        { quantity }
      </p>
      <label htmlFor="add-button">
        <input
          id="add-button"
          data-testid="customer_products__button-card-add-item-"
          type="button"
          value="+"
          onClick={ handleAddClick }
        />
      </label>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};
