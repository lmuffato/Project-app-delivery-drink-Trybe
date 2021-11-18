import React from 'react';
import { useSelector } from 'react-redux';

export default function OrderCard() {
  const { role } = useSelector((state) => state.user);
  return (
    <div>
      <p data-testid="seller_orders__element-order-id-<id>">
        Pedido { id }
      </p>
      <h2 data-testid="seller_orders__element-delivery-status-<id>">
        { status }
      </h2>
      <p data-testid="seller_orders__element-order-date-<id>">
        <strong>{ date }</strong>
      </p>
      <p data-testid="seller_orders__element-card-price-<id>">
        <strong>{ price }</strong>
      </p>
      { role === 'seller' && (
        <p data-testid="seller_orders__element-card-address-<id>">
          { address }
        </p>
      ) }
    </div>
  );
}
