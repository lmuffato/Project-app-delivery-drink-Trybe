import { useParams } from 'react-router-dom'; // 1
import React, { useEffect, useContext } from 'react';
import Navbar from '../Components/NavBar';
import { getOrderById } from '../services/endpointsAPI';
import Table from '../Components/CustomerOrdersDetails/Table';
import TotalValue from '../Components/CustomerOrdersDetails/TotalValue';
import StatusBar from '../Components/CustomerOrdersDetails/StatusBar';
import NewOrderContext from '../context/NewOrderContext';

export default function OrderDetails() {
  const { setOrderSale } = useContext(NewOrderContext);
  const { setOrderItensList } = useContext(NewOrderContext);
  const params = useParams(); // 2

  // Carrega os estados globais com as informações do pedido e dos produtos.
  const getOrderFromDataBase = async () => {
    const res = await getOrderById(params.id);
    setOrderItensList(res.itensList);
    setOrderSale(res.sale);
  };

  useEffect(() => {
    getOrderFromDataBase();
  }, []);

  return (
    <div>
      <h3>Detalhe do Pedido</h3>
      <StatusBar />
      <Navbar />
      <Table />
      <TotalValue />
    </div>
  );
}
