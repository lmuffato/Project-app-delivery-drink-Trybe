import React from 'react';
import PropTypes from 'prop-types';

function DetailHeader({ id, sellerName, date, status, role }) {
  return (
    <header>
      <span
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        {`PEDIDO ${id}`}
      </span>
      { JSON.parse(localStorage.getItem('user')).role === 'customer' && (
        <span
          data-testid={ `${role}_order_details__element-order-details-label-seller-name` }
        >
          { `P. Vend: ${sellerName}` }
        </span>
      ) }
      <span
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        { date }
      </span>
      <span
        data-testid={
          `${role}_order_details__element-order-details-label-delivery-status`
        }
      >
        { status }
      </span>
      { JSON.parse(localStorage.getItem('user')).role === 'seller' && (
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>
      ) }
      { JSON.parse(localStorage.getItem('user')).role === 'customer' ? (
        <button
          data-testid={ `${role}_order_details__button-delivery-check` }
          type="button"
          disabled="true"
        >
          MARCAR COMO ENTREGUE
        </button>
      ) : (
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled="true"
        >
          SAIU PARA ENTREGA
        </button>
      )}
    </header>
  );
}

DetailHeader.propTypes = ({
  id: PropTypes.number,
}).isRequired;

export default DetailHeader;
