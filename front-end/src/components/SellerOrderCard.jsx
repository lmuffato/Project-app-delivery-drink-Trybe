import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

function SellerOrderCard(props) {
  const { order } = props;
  const { id, status, saleDate, totalPrice, address } = order;

  return (
    <Link to={ `/seller/orders/${id}` }>
      <div data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido
        {' '}
        { id }
      </div>
      <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
        { status }
      </div>
      <div data-testid={ `seller_orders__element-order-date-${id}` }>
        { saleDate }
      </div>
      <div data-testid={ `seller_orders__element-card-price-${id}` }>
        R$
        {' '}
        { totalPrice }
      </div>
      <div data-testid={ `seller_orders__element-card-address-${id}` }>
        { address }
      </div>
    </Link>
  );
}

SellerOrderCard.propTypes = {
  order: shape({
    id: string,
    status: string,
    date: string,
    value: string,
    address: string,
  }),
}.isRequired;

export default SellerOrderCard;
