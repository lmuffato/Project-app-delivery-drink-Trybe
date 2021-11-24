import React from 'react';
import PropTypes from 'prop-types';

const MAX_ORDER_ID_CHARS = 4;

function OrderDescription({ prefix, order, role }) {
  const isCustomer = role === 'customer';
  console.log(order);

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
          { order.seller.name }
        </span>
      ) }
      { ' ' }
      <span
        data-testid={ `${prefix}element-order-details-label-order-date` }
      >
        { new Date(order.saleDate).toLocaleDateString('pt-BR') }
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
          disabled
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
            disabled
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
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    seller: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  role: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
};

export default OrderDescription;
