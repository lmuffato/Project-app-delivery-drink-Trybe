import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const MAX_ORDER_ID_CHARS = 4;

function OrderDescription({ prefix, order, role }) {
  const isCustomer = role === 'customer';
  const { id } = useParams();
  const [status, setStatus] = useState(order.status);

  const handleClick = async (message) => {
    try {
      await axios.patch(`http://localhost:3001/sales/${id}`, {
        status: message,
      }).then((res) => {
        setStatus(res.data.status);
      });
    } catch (e) {
      console.log(e.message);
    }
  };

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
        { status }
      </span>
      { ' ' }
      { isCustomer ? (
        <button
        onClick={ () => handleClick('Entregue') }
          type="button"
          data-testid={ `${prefix}button-delivery-check` }
        >
          MARCAR COMO ENTREGUE
        </button>
      ) : (
        <>
          <button
            onClick={ () => handleClick('Preparando') }
            type="button"
            data-testid={ `${prefix}button-preparing-check` }
          >
            PREPARAR PEDIDO
          </button>
          <button
            onClick={ () => handleClick('Em Trânsito') }
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
