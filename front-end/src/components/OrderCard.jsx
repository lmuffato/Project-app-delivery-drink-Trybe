import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  return (
    <div data-testid={ `seller_orders__element-order-id-${order.id}` }>
      <p data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
        {order.status}
      </p>
      <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
        {order.sale_date}
      </p>
      <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
        {order.total_price}
      </p>
      <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
        {order.delivery_address}
      </p>
      <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
        {order.delivery_number}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default OrderCard;
