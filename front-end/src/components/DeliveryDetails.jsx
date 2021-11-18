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
          <DropDown
            items={ ['luisa', 'orlando'] }
            dataTest="customer_checkout__select-seller"
          />
          <Input label="Endereço" dataTest="customer_checkout__input-address" />
          <Input label="Número" dataTest="customer_checkout__input-addressNumber" />
        </Box>
      </Container>
    </>
  );
}

export default DeliveryDetails;
