import React, { useEffect, useState } from 'react';
import OrderCard from '../components/molecules/TempOrderCard';
import { fetchSales } from '../utils/API/fetch';

function SellerOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const sales = await fetchSales(JSON.parse(localStorage.getItem('user')).token);
      setOrders(sales);
    })();
  }, []);
  return (
    <div>
      { orders.map((_o, i) => <OrderCard key={ i } { ...orders[i] } />) }
    </div>
  );
}

export default SellerOrders;
