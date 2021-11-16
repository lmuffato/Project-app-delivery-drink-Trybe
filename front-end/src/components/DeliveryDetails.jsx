import React from 'react';
import { CssBaseline, Typography, Container, Box } from '@mui/material';
import DropDown from './DropDown';
import Input from './Input';

function DeliveryDetails() {
  return (
    <>
      <CssBaseline />
      <Container
        component="div"
        maxWidth="lg"
        sx={ { marginTop: 3 } }
      >
        <Typography variant="h5">
          Detalhes de entrega
        </Typography>
        <Box
          sx={ {
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
          } }
          component="div"
        >
          <DropDown name="Pessoa vendedora" items={ ['luisa', 'orlando'] } />
          <Input label="Endereço" />
          <Input label="Número" />
        </Box>
      </Container>
    </>
  );
}

export default DeliveryDetails;
