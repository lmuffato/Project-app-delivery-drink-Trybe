import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';

export default function ProductCard({ product, index, callback }) {
  const { url_image: urlImage, name, price } = product;
  let { quantity } = product;
  const { products, setProducts } = useContext(ContextDeliveryApp);
  const [qty, setQty] = useState(quantity);

  const handleDeductClick = () => {
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
      <img src={ urlImage } alt="product" />
      <p>{ name }</p>
      <p>{ price }</p>
      <label htmlFor="deduct-button">
        <input id="deduct-button" type="button" value="-" onClick={ handleDeductClick } />
      </label>
      <p>{ quantity }</p>
      <label htmlFor="add-button">
        <input id="add-button" type="button" value="+" onClick={ handleAddClick } />
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
