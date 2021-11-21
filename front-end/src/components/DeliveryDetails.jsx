import React, { useState, useEffect, useContext } from 'react';
import { CssBaseline, Typography, Container, Box, Button } from '@mui/material';
import DropDown from './DropDown';
import Input from './Input';
import ContextProducts from '../context/ContextProducts';
import ContextLogin from '../context/ContextLogin';

const { useHistory } = require('react-router-dom');

const axios = require('axios').default;

const urlBase = 'http://localhost:3001';

function DeliveryDetails() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [allSellers, setAllSellers] = useState([]);

  const history = useHistory();

  const {
    cartProducts,
    calculateSubtotal,
  } = useContext(ContextProducts);
  const { userData: { id, token } } = useContext(ContextLogin);

  useEffect(() => {
    const getSellers = async () => {
      const { data } = await axios.get(`${urlBase}/users?role=seller`);
      const sellersInfo = data.map((seller) => ([seller.id, seller.name]));
      setAllSellers(sellersInfo);
    };
    getSellers();
  }, []);

  async function handleCreateSale() {
    const payload = JSON.stringify({
      totalPrice: parseFloat(calculateSubtotal(cartProducts).toString(), 2),
      deliveryAddress,
      deliveryNumber,
      userId: id,
      sellerId,
      products: cartProducts,
    });
    const config = {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    };
    try {
      const { data } = await axios.post(`${urlBase}/sales`, payload, config);
      history.push(`/customer/orders/${data.saleId}`);
    } catch (error) {
      console.log(error.response);
    }
  }
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
            items={ allSellers }
            dataTest="customer_checkout__select-seller"
            onChange={ setSellerId }
          />
          <Input
            label="Endereço"
            dataTest="customer_checkout__input-address"
            onChange={ setDeliveryAddress }
            value={ deliveryAddress }
          />
          <Input
            label="Número"
            dataTest="customer_checkout__input-addressNumber"
            onChange={ setDeliveryNumber }
            value={ deliveryNumber }
          />
        </Box>
      </Container>
      <Button
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => handleCreateSale() }
      >
        <Typography>
          Finalizar pedido
        </Typography>
      </Button>
    </>
  );
}

export default DeliveryDetails;
