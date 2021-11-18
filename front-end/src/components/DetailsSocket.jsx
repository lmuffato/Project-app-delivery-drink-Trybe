import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useLocation, useParams } from 'react-router';
import OrdersTable from './OrdersTable';

export default function DetailsSocket() {
  const { id } = useParams();
  const socket = io('http://localhost:3000');
  const path = useLocation().pathname;
  const [sale, setSale] = useState({});
  const [buttonText] = useState({
    pendente: 'preparo',
    preparando: 'saiu para entrega',
    'Em Trânsito': 'Entregue',
  });
  useEffect(() => {
    socket.on('connection', () => {
      socket.emit('getSale', id);
    });
    socket.on('takeSale', (response) => {
      setSale(response);
    });
  }, [socket, id]);
  const onClick = ({ target }) => {
    const statusValue = { preparo: 'Preparando',
      'saiu para entrega': 'Em Trânsito',
      Entregue: 'Entregue' };
    const status = statusValue[target.value];
    socket.emit('sendStatus', { id, status });
  };
  const renderButton = () => {
    const buttonValue = buttonText[sale.status];
    const validateStatus = sale.status === 'Em Trânsito';
    if (validateStatus && !path.includes('seller')) {
      return (
        <button
          type="button"
          value={ buttonValue }
          onClick={ onClick }
        >
          {buttonValue}

        </button>
      );
    }
    if (!validateStatus && path.includes('seller')) {
      return (
        <button
          type="button"
          value={ buttonValue }
          onClick={ onClick }
        >
          {buttonValue}
        </button>
      );
    }
    return null;
  };
  return (
    <div>
      <div>
        <h1>{`PEDIDO${sale.id}`}</h1>
        <h1>{sale.date}</h1>
        <div><h1>{sale.status}</h1></div>
        { renderButton() }
      </div>
      <div>
        <OrdersTable orderList={ sale.products } />
      </div>
    </div>
  );
}
