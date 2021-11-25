import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../Components/NavBar';
import { getOrderById } from '../services/endpointsAPI';
import Table from '../Components/CustomerOrdersDetails/Table';
import NewOrderContext from '../context/NewOrderContext';
// import TableHeader from '../Components/CustomerOrdersDetails/TableHeader';

export default function OrderDetails() {
  // const [order, setOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const { setItensList } = useContext(NewOrderContext);
  const { orderSale, setOrderSale } = useContext(NewOrderContext);
  const { orderItensList, setOrderItensList } = useContext(NewOrderContext);
  const params = useParams();

  const printUrl = () => {
    // console.log(params);
  };

  const getOrder = async () => {
    const res = await getOrderById(params.id);
    // setOrder(res);
    setOrderItensList(res.itensList);
    setOrderSale(res.sale);
    console.log(res.sale);
    // setItensList(res.itensList);
  };

  useEffect(() => {
    setIsLoading(true);
    getOrder();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading === false || orderItensList.length !== 0) {
      console.log(orderItensList);
      console.log(orderSale);
    }
    setIsLoading(true);
    getOrderById(params.id);
    printUrl();
    setIsLoading(false);
  }, [orderItensList]);

  return (
    <div>
      <Navbar />
      <Table />
    </div>
  );
}
