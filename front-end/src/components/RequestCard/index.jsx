import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function RequestCard({ requestId, status, date, price }) {
  return (
    <div className={ styles.cardContainer }>
      <div className={ styles.requestId }>
        <span>Pedido</span>
        <span data-testid={ `customer_orders__element-order-id-${requestId}` }>
          {requestId}
        </span>
      </div>
      <div className={ styles[status] }>
        <span data-testid={ `customer_orders__element-delivery-status-id-${requestId}` }>
          {status}
        </span>
      </div>
      <div className={ styles.dateAndPrice }>
        <span data-testid={ `customer_orders__element-order-date-id-${requestId}` }>
          {date}
        </span>
        <span>{`R$ ${price}`}</span>
      </div>
    </div>
  );
}

RequestCard.propTypes = {
  requestId: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.func,
  price: PropTypes.string,
  dataTestIdRequest: PropTypes.string,
  dataTestIdStatus: PropTypes.string,
  dataTestIdDate: PropTypes.string,
}.isRequired;
