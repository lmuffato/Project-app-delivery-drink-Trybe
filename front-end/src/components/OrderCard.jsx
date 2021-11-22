import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, status, totalPrice, saleDate }) {
  return (
    <div>
      <div
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        { id }
      </div>
      <div
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { status }
      </div>
      <div
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        { totalPrice.replace('.', ',') }
      </div>
      <div
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        { saleDate }
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default OrderCard;
