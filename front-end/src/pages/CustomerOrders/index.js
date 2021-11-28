import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api';
import ProductOrderCard from '../../components/ProductOrderCard';
import { useAuth } from '../../contexts/auth';
import useSocket from '../../hooks/useSocket';

const OrdersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;

function ProductOrderStatus() {
  const [data, setData] = useState([]);
  const { user, logoutNotAuthorized } = useAuth();

  function getAll() {
    api.sales.getAll(user.token).then(setData).catch(logoutNotAuthorized);
  }

  useSocket(getAll);

  useEffect(() => {
    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.length === 0) return <h1>Sem pedidos ainda 👺</h1>;

  return (
    <OrdersContainer>
      {data.map(({ deliveryAddress, saleDate, id, totalPrice, status }) => (
        <ProductOrderCard
          key={ id }
          address={ deliveryAddress }
          date={ (new Date(saleDate)).toLocaleDateString('pt-br') }
          orderId={ id }
          price={ totalPrice }
          status={ status.toLowerCase() }
          user="customer"
        />
      ))}
    </OrdersContainer>
  );
}

export default ProductOrderStatus;
