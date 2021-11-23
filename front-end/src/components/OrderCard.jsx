import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function OrderCard({ id, status, totalPrice, saleDate }) {
  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(`/customer/orders/${id}`) }
    >
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
    </button>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default OrderCard;
