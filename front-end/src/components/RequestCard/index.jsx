import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function RequestCard({ requestId, status, date, price }) {
  return (
    <div className={ styles.cardContainer }>
      <div
        className={ styles.requestId }
        data-testid={ `customer_orders__element-order-${requestId}` }
      >
        <span>Pedido</span>
        <span>{requestId}</span>
      </div>
      <div
        className={ styles[status] }
        data-testid={ `customer_orders__element-delivery-status-${requestId}` }
      >
        {status}
      </div>
      <div className={ styles.dateAndPrice }>
        <span data-testid={ `customer_orders__element-order-date-${requestId}` }>
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
