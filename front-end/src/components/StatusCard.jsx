import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
} from '@mui/material';

const { io } = require('socket.io-client');

const socketServerUrl = 'http://localhost:3001';
const socket = io(socketServerUrl);

function StatusCard({ initialStatus, id }) {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    socket.on('changeState', ({ newState, idToChange }) => {
      if (idToChange === id) setStatus(newState);
    });
    // eslint-disable-next-line
  }, []);
  const colorStatus = {
    Pendente: '#ffcc00',
    Preparando: '#99cc00',
    Entregue: '#00cc99',
  };
  return (
    <Box
      sx={ {
        backgroundColor: colorStatus[status],
        width: '100%',
        height: '100%',
      } }
    >
      <Typography
        sx={ { fontSize: 14 } }
        color="text.secondary"
        textAlign="center"
        data-testid={ `customer_orders__element-delivery-status-${id}` }
        variant="h4"
      >
        {status}
      </Typography>
    </Box>

  );
}

StatusCard.propTypes = {
  initialStatus: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default StatusCard;
