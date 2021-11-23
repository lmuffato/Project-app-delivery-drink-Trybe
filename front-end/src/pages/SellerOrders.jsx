import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import OrderCard from '../components/OrderCard';

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
        orders.map((order) => <OrderCard key={ order.id } order={ order } />)
      }
    </div>
  );
}

export default SellerOrders;
