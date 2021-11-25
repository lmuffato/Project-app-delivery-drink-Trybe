import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
} from '@mui/material';
import socketInstance from '../utils/socketInstance';

const socket = socketInstance();

function StatusCard({ initialStatus, id }) {
  const [status, setStatus] = useState(initialStatus);

  socket.on('changeStatus', ({ newStatus, idToChange }) => {
    if (idToChange === id) setStatus(newStatus);
  });

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
