import React, { useContext } from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function OrderCard(props) {
  const { user } = useContext(Context);
  const { order } = props;
  const { id, status, date, totalPrice, address } = order;

  if (user.role === 'seller') {
    return (
      <Link to={ `/seller/orders/${id}` }>
        <div data-testid={ `seller_ orders__element-order-id-${id}` }>
          Pedido
          {' '}
          { id }
        </div>
        <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
          { status }
        </div>
        <div data-testid={ `seller_orders__element-order-date-${id}` }>
          { date }
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

  return (
    <div>
      <Link
        to={ `/customer/orders/${id}` }
        data-testid={ `customer_ orders__element-order-id--${id}` }
      >
        Pedido
        {' '}
        { id }
      </Link>
      <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { status }
      </div>
      <div data-testid={ `customer_orders__element-order-date-${id}` }>
        { date }
      </div>
      <div data-testid={ `customer_orders__element-card-price-${id}` }>
        R$
        {' '}
        { totalPrice }
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: shape({
    id: string,
    status: string,
    date: string,
    value: string,
    address: string,
  }),
}.isRequired;

export default OrderCard;
