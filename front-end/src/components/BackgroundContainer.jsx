import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function BackgroundContainer({ children }) {
  return (
    <Box
      component="section"
      sx={ { backgroundColor: '#cbc26d', width: '100vh', height: '100vh' } }
    >
      {children}
    </Box>
  );
}

BackgroundContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundContainer;
