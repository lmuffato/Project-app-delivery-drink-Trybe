import React, { useState } from 'react';
import moment from 'moment';
import './OrderDetailsHeader.css';

export default function OrderDetailsHeader() {
  const [changeRole, setChangeRole] = useState('EM ANDAMENTO');

  const handleChangeStatus = () => {
    setChangeRole('ENTREGUE');
  };

  return (
    <div className="container-details">
      <div className="pedido">
        <h2>PEDIDO</h2>
      </div>
      <div className="vendedor">
        <h2>VENDEDOR</h2>
      </div>
      <div className="momento">
        <h2>
          {moment().format('l')}
        </h2>
      </div>
      <div className="status">
        <h2>{ changeRole }</h2>
      </div>
      <div className="select-role">
        <button type="button" onClick={ handleChangeStatus }>MARCAR COMO ENTREGUE</button>
      </div>
    </div>
  );
}
