import React, { useEffect, useState } from 'react';
import OrderCard from '../components/molecules/TempOrderCard';

const mock = [
  { id: 1,
    status: 'Pendente',
    date: '08/04/21',
    price: 23.80,
    address: 'Rua Irmãos Monteiro, Bairro Pedras, 851' },
  { id: 2,
    status: 'Preparando',
    date: '08/04/21',
    price: 14.20,
    address: 'Rua Vila Bela, Bairro Gurupi, 670' },
  { id: 3,
    status: 'Entregue',
    date: '07/04/21',
    price: 28.46,
    address: 'Rua Sessenta e Dois, Bairro Maranguape II, 533' },
];
function SellerOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(mock);
  }, []);
  return (
    <div>
      { orders.map((_o, i) => <OrderCard key={ i } { ...mock[i] } />) }
    </div>
  );
}

export default SellerOrders;
