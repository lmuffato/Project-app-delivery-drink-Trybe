import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

import '../styles/customerProductsStyle.css';

export default function ProductCard({ product, index, callback }) {
  const { url_image: urlImage, name, price, id } = product;
  const { products, setProducts } = useContext(ContextDeliveryApp);
  const [qty, setQty] = useState(0);

  const handleRemoveClick = () => {
    if (qty > 0) {
      const updatingProducts = products;
      updatingProducts[index].quantity -= 1;
      setProducts(updatingProducts);
      setQty(qty - 1);
      callback(updatingProducts);
    }
  };

  const handleAddClick = async () => {
    const updatingProducts = products;
    updatingProducts[index].quantity += 1;
    setProducts(updatingProducts);
    if (qty === undefined) {
      setQty(1);
    } else {
      setQty(qty + 1);
    }
    callback(updatingProducts);
  };

  const handleInputChange = async (e) => {
    setQty(parseInt(e.target.value, 10));
    const updatingProducts = products;
    updatingProducts[index].quantity = parseInt(e.target.value, 10);
    await setProducts(updatingProducts);
    callback(updatingProducts);
  };

  return (
    <div>
      <img
        src={ urlImage }
        id="product-image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        alt={ name }
      />
      <p
        id="product-name"
        data-testid={ `customer_products__element-card-title-${id}` }
        className="products-name"
      >
        { name }
      </p>
      <p
        id="product-price"
        data-testid={ `customer_products__element-card-price-${id}` }
        className="products-price"
      >
        { price.toString().replace(/\./, ',') }
      </p>
      <button
        id="remove-button"
        type="button"
        onClick={ handleRemoveClick }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        className="add-remove-btn"
      >
        -
      </button>
      <label htmlFor="product-quantity">
        <input
          id="product-quantity"
          type="text"
          placeholder="0"
          value={ qty.toString() }
          onChange={ handleInputChange }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          className="products-qnt-input"
        />
      </label>
      <button
        id="add-button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        value="+"
        onClick={ handleAddClick }
        className="add-remove-btn"
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};
