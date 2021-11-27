import { useParams } from 'react-router-dom'; // 1
import React, { useEffect, useContext, useState } from 'react';
import Navbar from '../Components/NavBar';
import { getOrderById } from '../services/endpointsAPI';
import Table from '../Components/CustomerOrdersDetails/Table';
import TotalValue from '../Components/CustomerOrdersDetails/TotalValue';
import StatusBar from '../Components/CustomerOrdersDetails/StatusBar';
import NewOrderContext from '../context/NewOrderContext';
import UserContext from '../context/userContext';

export default function OrderDetails() {
  const { setOrderSale } = useContext(NewOrderContext);
  const { setOrderItensList } = useContext(NewOrderContext);
  const { userData } = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  const params = useParams(); // 2

  // Carrega os estados globais com as informações do pedido e dos produtos.
  const getOrderFromDataBase = async () => {
    const { token } = userData;
    const res = await getOrderById(token, params.id);
    // console.log('oderDetails', res);
    setOrderItensList(res.itensList);
    setOrderSale(res.sale);
    if (res) setLoaded(true);
  };

  useEffect(() => {
    getOrderFromDataBase();
  }, []);

  return (
    <div>
      {/* { renderComponents() } */}
      <Navbar />
      <h3>Detalhe do Pedido</h3>
      { loaded && <StatusBar /> }
      <Table />
      <TotalValue />
    </div>
  );
}
