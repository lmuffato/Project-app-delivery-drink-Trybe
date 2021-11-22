import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function SaleCard({ sale }) {
  const { id,
    totalPrice, deliveryAddress, deliveryNumber, sale_date: saleDate, status } = sale;
  const date = moment(saleDate).format('DD/MM/YY');
  return (
    <Link to={ `/seller/orders/${id}` }>
      <p data-testid={ `seller_orders__element-order-id-${id}` }>{ id }</p>
      <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</p>
      <p data-testid={ `seller_orders__element-order-date-${id}` }>{ date }</p>
      <p data-testid={ `seller_orders__element-card-price-${id}` }>{ totalPrice }</p>
      <p
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        { `${deliveryAddress}, ${deliveryNumber}` }
      </p>
    </Link>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    sale_date: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
