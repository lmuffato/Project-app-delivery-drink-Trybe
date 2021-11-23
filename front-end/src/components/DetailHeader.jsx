import React from 'react';
import PropTypes from 'prop-types';

function DetailHeader({ id, sellerName, date, status }) {
  return (
    <header>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`PEDIDO ${id}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { `P. Vend: ${sellerName}` }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { date }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled="true"
      >
        MARCAR COMO ENTREGUE
      </button>
    </header>
  );
}

DetailHeader.propTypes = ({
  id: PropTypes.number,
}).isRequired;

export default DetailHeader;
