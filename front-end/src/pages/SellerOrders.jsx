import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import SellerOrderCard from '../components/SellerOrderCard';

function SellerOrders() {
  const { get } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    get('seller_orders').then((ordersData) => setOrders(ordersData));
  }, [get]);

  return (
    <div>
      Tela do cliente
      {
        orders.map((order) => <SellerOrderCard key={ order.number } order={ order } />)
      }
    </div>
  );
}

export default SellerOrders;
