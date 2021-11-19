import React from 'react';
import PropTypes from 'prop-types';

function CheckoutCard({ index, name, qty, price, total, onChange }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { Number(index) + 1 }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { qty }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { `R$ ${Number(price).toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { `R$ ${total.toFixed(2).replace('.', ',')}` }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <button
          type="button"
          onClick={ onChange }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  qty: PropTypes.number,
  price: PropTypes.number,
  total: PropTypes.number,
}.isRequired;

export default CheckoutCard;
