import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerNavBar from '../components/CustomerNavBar';
import OrderCard from '../components/OrderCard';

function SellerOrders() {
  const [ordersList, setOrdersList] = useState([]);

  async function getOrders() {
    const ordersReq = await axios.get('http://localhost:3001/sales');
    const orders = ordersReq.data;
    console.log(orders);
    setOrdersList(orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <CustomerNavBar fixed="top" />
      { ordersList.map((o) => <div key={ o.id }><OrderCard order={ o } /></div>) }
    </>
  );
}

export default SellerOrders;
