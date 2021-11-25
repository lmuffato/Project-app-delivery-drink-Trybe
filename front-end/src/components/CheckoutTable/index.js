import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function CheckoutTable({ cart }) {
  const dataTestID = (index) => (
    `customer_checkout__element-order-table-item-number-${index}`
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Total</th>
          <th>Remover</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(({ id, name, quantity, price }, index) => (
          <tr key={ id }>
            <td
              data-testid={ dataTestID(index) }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {String(price).replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {(+price * +quantity).toFixed(2).replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              REMOVER
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CheckoutTable.propTypes = {
  cart: PropTypes.objectOf.isRequired,
};

export default CheckoutTable;
