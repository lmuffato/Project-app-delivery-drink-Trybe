import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import SocketContext from './SocketContext';

function SocketProvider({ children }) {
  const [orderStatus, setOrderStatus] = useState('');
  const [orderId, setOrderId] = useState();
  const socket = socketIOClient('http://localhost:3001');

  function clientEmitStatus(status, id) {
    socket.emit('clientOrderSatus', { newStatus: status, idOrder: id });
  }

  socket.on('serverNewStatus', ({ newStatus, idOrder }) => {
    if (idOrder === orderId) {
      setOrderStatus(newStatus);
    }
  });

  return (
    <SocketContext.Provider
      value={
        {
          setOrderId,
          clientEmitStatus,
          orderStatus,
          setOrderStatus }
      }
    >
      { children }
    </SocketContext.Provider>
  );
}

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SocketProvider;
