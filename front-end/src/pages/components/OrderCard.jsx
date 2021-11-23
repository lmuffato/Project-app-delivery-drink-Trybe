import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderCard({ sale }) {
  const { id, totalPrice, status, sale_date: saleDate } = sale;

  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <p data-testid={ `customer_orders__element-order-id-${id}` }>
          {`Pedido ${id}`}
        </p>
        <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
          {status}
        </p>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          {saleDate.split('T')[0].split('-').reverse().join('/')}
        </p>
        <p>{`${totalPrice.replace('.', ',')}`}</p>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    status: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
