import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import OrderCard from '../components/OrderCard';

function SellerOrders() {
  const { get } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    get('seller_orders').then((ordersData) => setOrders(ordersData));
=======
    const getOrders = async () => {
      const { data } = await get('seler_login');
      console.log(data);
      setOrders(data);
    };
    getOrders();
>>>>>>> 5c7bbc59d74bb75b8626f3110030eb1c4bb922d4
  }, [get]);

  return (
    <div>
<<<<<<< HEAD
      Tela do cliente
      {
        orders.map((order) => <OrderCard key={ order.id } order={ order } />)
      }
=======
      Tela do Vendedor
      { orders
        && orders.map((order) => <SellerOrderCard key={ order.id } order={ order } />)}
>>>>>>> 5c7bbc59d74bb75b8626f3110030eb1c4bb922d4
    </div>
  );
}

export default SellerOrders;
