import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import SellerOrderCard from '../components/SellerOrderCard';

function SellerOrders() {
  const { get } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    get('seller_orders').then((ordersData) => setOrders(ordersData));
    const getOrders = async () => {
      const { data } = await get('seler_login');
      setOrders(data);
    };
    getOrders();
  }, [get]);

  return (
    <div>
      Tela do Vendedor
      { orders
        && orders.map((order) => <SellerOrderCard key={ order.id } orders={ orders } />)}
    </div>
  );
}

export default SellerOrders;
