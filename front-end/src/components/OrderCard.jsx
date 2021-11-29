import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

function OrderCard({ id, status, totalPrice, saleDate }) {
  const [orderStatus, setOrderStatus] = useState(status);
  const history = useHistory();
  const socket = socketIOClient('http://localhost:3001');

  socket.on('serverNewStatus', ({ newStatus, idOrder }) => {
    if (parseInt(idOrder, 10) === id) {
      setOrderStatus(newStatus);
    }
  });

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
        { orderStatus }
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
