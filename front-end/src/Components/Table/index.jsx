import React from 'react';
import PropTypes from 'prop-types';

function Table({ headers, payload, hasButton, onClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          {headers.map((header, i) => (
            <th key={ `head${i}` }>{header}</th>
          ))}
          {hasButton && <th>Excluir</th>}
        </tr>
      </thead>
      <tbody>
        {payload.map((item, i) => (
          <tr key={ `row${i}` }>
            <td data-testid={ `customer_checkout__element-order-table-item-number-${i}` }>
              {i + 1}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-name-${i}` }>
              {item.name}
            </td>
            <td data-testid={ `cutomer_checkout__element-order-table-quantity-${i}` }>
              {item.quantity}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }>
              {`R$ ${item.price}`}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }>
              {`R$ ${item.total}`}
            </td>
            {hasButton && (
              <td>
                <button
                  type="button"
                  onClick={ () => onClick(item.name) }
                  data-testid={ `customer_checkout__element-order-table-remove-${i}` }
                >
                  Remover
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  hasButton: false,
  onClick: () => null,
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  payload: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasButton: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Table;
