import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemoveItem from './ButtonRemoveItem';

function OrderItem({ info: { name, quantity, unitPrice, subTotal, productId }, index }) {
  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number--${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { name }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { Number(unitPrice).toLocaleString('pt-BR', {
          currency: 'BRL',
          minimumFractionDigits: 2,
        }) }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {/* Colocar a vírgula na moeda: https://pt.stackoverflow.com/questions/264503/personalizar-o-tofixed-para-utilizar-v%C3%ADrgula-como-separador-decimal */}
        { Number(subTotal).toLocaleString('pt-BR', {
          currency: 'BRL',
          minimumFractionDigits: 2,
        }) }
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        <ButtonRemoveItem id={ productId } />
      </td>
    </tr>
  );
}

OrderItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    quantity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    unitPrice: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    subTotal: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }),
  index: PropTypes.number,
}.isRequired;

export default OrderItem;
