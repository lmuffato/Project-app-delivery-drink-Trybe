import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { updateSale } from '../services/apis';
import ApiContext from '../context/ApiContext';

function DetailHeader({ id, sellerName, date, status, role }) {
  const { att, setAtt } = useContext(ApiContext);

  const setPreparing = async () => {
    await updateSale(id, 'Preparando');
    setAtt(!att);
  };

  const setGoing = async () => {
    await updateSale(id, 'Em Trânsito');
    setAtt(!att);
  };

  const setDelivered = async () => {
    await updateSale(id, 'Entregue');
    setAtt(!att);
  };

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
          onClick={ setPreparing }
          disabled={ status !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
      ) }
      { JSON.parse(localStorage.getItem('user')).role === 'customer' ? (
        <button
          data-testid={ `${role}_order_details__button-delivery-check` }
          type="button"
          disabled={ status !== 'Em Trânsito' }
          onClick={ setDelivered }
        >
          MARCAR COMO ENTREGUE
        </button>
      ) : (
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled={ status !== 'Preparando' }
          onClick={ setGoing }
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
