import React, { useState } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';

const socket = io.connect('http://localhost:3001');

export const socketContext = React.createContext('');

export const SocketProvider = ({ children }) => {
  const [socketStatus, setSocketStatus] = useState(null);

  socket.on('updateStatus', (receivedStatus) => {
    setSocketStatus(receivedStatus);
  });

  const allParameters = {
    socketStatus,
    setSocketStatus,
  };

  return (
    <socketContext.Provider value={ allParameters }>
      { children }
    </socketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSocket = () => React.useContext(socketContext);
