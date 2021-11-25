import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import SellerOrderCard from '../components/SellerOrderCard';

function SellerOrders() {
  const { get } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await get('seler_login');
      console.log(data);
      setOrders(data);
    };
    getOrders();
  }, [get]);

  return (
    <div>
      Tela do Vendedor
      { orders
        && orders.map((order) => <SellerOrderCard key={ order.id } order={ order } />)}
    </div>
  );
}

export default SellerOrders;
