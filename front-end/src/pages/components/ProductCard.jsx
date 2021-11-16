import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function ProductCard({ product, index, callback }) {
  const { url_image: urlImage, name, price, id } = product;
  const { products, setProducts } = useContext(ContextDeliveryApp);
  const [qty, setQty] = useState();

  const handleRemoveClick = () => {
    if (qty > 0) {
      const updatingProducts = products;
      updatingProducts[index].quantity -= 1;
      setProducts(updatingProducts);
      setQty(qty - 1);
      callback(updatingProducts);
    }
  };

  const handleAddClick = () => {
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

  const handleInputChange = (e) => {
    console.log(typeof e.target.value);
    setQty(e.target.value);
    console.log(qty);
    const updatingProducts = products;
    updatingProducts[index].quantity = e.target.value;
    setProducts(updatingProducts);
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
      >
        { name }
      </p>
      <p
        id="product-price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.toString().replace(/\./, ',') }
      </p>
      <button
        id="remove-button"
        type="button"
        onClick={ handleRemoveClick }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <label htmlFor="product-quantity">
        <input
          id="product-quantity"
          type="number"
          placeholder="0"
          value={ qty }
          onChange={ handleInputChange }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
      </label>
      <button
        id="add-button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        value="+"
        onClick={ handleAddClick }
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