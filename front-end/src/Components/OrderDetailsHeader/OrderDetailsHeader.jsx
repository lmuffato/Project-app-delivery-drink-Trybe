import React, { useState } from 'react';
import moment from 'moment';
import './OrderDetailsHeader.css';

export default function OrderDetailsHeader() {
  const dataTestid37 = 'customer_order_details__element-order-details-label-order-id';
  const dataTestid38 = 'customer_order_details__element-order-details-label-seller-name';
  const dataTestid39 = 'customer_order_details__element-order-details-label-order-date';
  const Testid40 = 'customer_order_details__element-order-details-label-delivery-status';
  const dataTestid47 = 'customer_order_details__button-delivery-check';

  const [changeRole, setChangeRole] = useState('EM ANDAMENTO');

  const handleChangeStatus = () => {
    setChangeRole('ENTREGUE');
  };

  return (
    <div className="container-details">
      <div data-testid={ dataTestid37 } className="pedido">
        <h2>PEDIDO</h2>
      </div>
      <div data-testid={ dataTestid38 } className="vendedor">
        <h2>VENDEDOR</h2>
      </div>
      <div data-testid={ dataTestid39 } className="momento">
        <h2>
          {moment().format('DD/MM/YYYY')}
        </h2>
      </div>
      <div data-testid={ Testid40 } className="status">
        <h2>{ changeRole }</h2>
      </div>
      <div data-testid={ dataTestid47 } className="select-role">
        <button type="button" onClick={ handleChangeStatus }>MARCAR COMO ENTREGUE</button>
      </div>
    </div>
  );
}

// LUCAS MUFFATO ESSES SAO OS DATATESTID QUE VOCE DEVE USAR PARA GERAR A SUA TABLE, TAMU JUNTO MEU REI

// const dataTestid41 = 'customer_order_details__element-order-table-item-number-';
// const dataTestid42 = 'customer_order_details__element-order-table-name-';
// const dataTestid43 = 'customer_order_details__element-order-table-quantity-';
// const dataTestid44 = 'customer_order_details__element-order-table-sub-total-';
// const dataTestid45 = 'customer_order_details__element-order-total-price-';
