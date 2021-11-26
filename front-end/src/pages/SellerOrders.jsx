import React, { useEffect, useState } from 'react';
import OrderCard from '../components/molecules/OrderCard';
import NavBar from '../components/NavBar';
import { fetchSales } from '../utils/API/fetch';

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const sales = await fetchSales(JSON.parse(localStorage.getItem('user')).token);
      setOrders(sales);
    })();
  }, []);
  return (
    <div>
      <NavBar />
      { orders.map((order, i) => <OrderCard key={ i } { ...order } />) }
    </div>
  );
}
