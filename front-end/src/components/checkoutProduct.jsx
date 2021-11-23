import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutProduct({ index, id, name, qtd, price }) {
  const newPrice = (price / qtd).toFixed(2).toString().replace(/\./g, ',');
  const subtotal = (price).toString().replace(/\./g, ',');
  return (
    <div key={ id }>
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {name}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {qtd}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {newPrice}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {`R$:${subtotal}`}
      </p>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        REMOVER
      </button>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
