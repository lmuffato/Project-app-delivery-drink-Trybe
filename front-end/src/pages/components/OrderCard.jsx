import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function OrderCard({ sale }) {
  const { id, totalPrice, status, sale_date: saleDate } = sale;
  const date = moment(saleDate).format('DD/MM/YY');

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
          {date}
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
