import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import OrderCard from '../components/SellerOrderCard';

function SellerOrders() {
  const { get } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await get('seler_login');
      setOrders(data);
    };
    getOrders();
  }, [get]);

  return (
    <div>
      Tela do Vendedor
      { orders.length > 0
        && orders.map((order) => <OrderCard key={ order.id } order={ order } />)}
    </div>
  );
}

export default SellerOrders;
