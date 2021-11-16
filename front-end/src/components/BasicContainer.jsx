import React from 'react';
import { CssBaseline, Typography, Container, Box } from '@mui/material';
import PropTypes from 'prop-types';

function BasicContainer({ title, children }) {
  return (
    <>
      <CssBaseline />
      <Container
        component="div"
        maxWidth="lg"
        sx={ { marginTop: 3 } }
      >
        <Typography variant="h4">
          {title}
        </Typography>
        <Box
          style={ { backgroundColor: '#cfe8fc', height: '50vh' } }
          component="div"
        >
          {children}
        </Box>
      </Container>
    </>

  );
}

export default BasicContainer;

BasicContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
