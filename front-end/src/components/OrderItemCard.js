import React from 'react';
import PropTypes from 'prop-types';

function OrderItemCard({ product, index }) {
  return (
    <tr>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { product.name }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { product.quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        R$
        { ' ' }
        { product.price.replace('.', ',') }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        R$
        { ' ' }
        { (+product.price * product.quantity).toFixed(2).replace('.', ',') }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-remove-${index}` }>
        Remover
      </td>
    </tr>
  );
}

OrderItemCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderItemCard;
