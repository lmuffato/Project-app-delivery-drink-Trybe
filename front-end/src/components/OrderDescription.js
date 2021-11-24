import React from 'react';
import PropTypes from 'prop-types';

const MAX_ORDER_ID_CHARS = 4;

function OrderDescription({ prefix, order, role }) {
  const isCustomer = role === 'customer';

  return (
    <p>
      <span
        data-testid={ `${prefix}element-order-details-label-order-id` }
      >
        PEDIDO
        { ' ' }
        { `${order.id}`.padStart(MAX_ORDER_ID_CHARS, '0') }
        ;
      </span>
      { ' ' }
      { isCustomer && (
        <span
          data-testid={ `${prefix}element-order-details-label-seller-name` }
        >
          Fulana Pereira
        </span>
      ) }
      { ' ' }
      <span
        data-testid={ `${prefix}element-order-details-label-order-date` }
      >
        07/04/2021
      </span>
      { ' ' }
      <span
        data-testid={ `${prefix}element-order-details-label-delivery-status` }
      >
        {order.status}
      </span>
      { ' ' }
      { isCustomer ? (
        <button
          type="button"
          data-testid={ `${prefix}button-delivery-check` }
        >
          MARCAR COMO ENTREGUE
        </button>
      ) : (
        <>
          <button
            type="button"
            data-testid={ `${prefix}button-preparing-check` }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid={ `${prefix}button-dispatch-check` }
          >
            SAIU PARA ENTREGA
          </button>
        </>
      ) }
    </p>
  );
}

OrderDescription.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.number,
  }).isRequired,
  role: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
};

export default OrderDescription;
