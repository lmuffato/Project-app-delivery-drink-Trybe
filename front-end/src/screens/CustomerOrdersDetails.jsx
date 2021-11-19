import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import OrderDetailsDashboard from '../components/OrderDetailsDashboard';

function CustomerOrdersDetails() {
  const [saleInfo, setSaleInfo] = useState();
  const urlBase = 'http://localhost:3001/sales/';
  const { id: saleId } = useParams();

  useEffect(() => {
    const getSale = async () => {
      const { data: response } = await axios.get(`${urlBase}${saleId}`);
      setSaleInfo(response);
    };
    getSale();
  }, []);

  return (
    <div>
      <NavBar />
      <Typography
        sx={ { fontSize: 12 } }
        color="text.secondary"
        gutterBottom
      >
        Detalhes do Pedido
      </Typography>
      { !saleInfo
        ? <p>Loading</p>
        : <OrderDetailsDashboard { ...saleInfo } /> }
    </div>
  );
}

export default CustomerOrdersDetails;
