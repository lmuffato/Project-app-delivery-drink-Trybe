import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SellerOrderCard({ id, status, totalPrice,
  saleDate, deliveryAddress, deliveryNumber }) {
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
      onClick={ () => history.push(`/seller/orders/${id}`) }
    >
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        {id}
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        {orderStatus}
      </div>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        {saleDate}
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        {totalPrice}
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {deliveryAddress}
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        {deliveryNumber}
      </div>
    </button>
  );
}

SellerOrderCard.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default SellerOrderCard;
