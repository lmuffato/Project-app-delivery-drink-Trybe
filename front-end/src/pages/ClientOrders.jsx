/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Context from '../context/Context';
import OrderCard from '../components/OrderCard';

function ClientOrders() {
  const { user } = useContext(Context);
  const [orders, setOrders] = useState([]);
  console.log(user);

  useEffect(() => {
    const fetchOrder = (async () => {
      const token = localStorage.getItem('token');
      const request = await axios.get('http://localhost:3001/customer/orders',
        { headers: {
          authorization: token,
        } });
      setOrders(request.data);
      return request.data;
    });
    fetchOrder();
  }, []);

  console.log(orders);

  return (
    <div>
      Tela do que to trab alhandop
      {
        orders.map((order) => <OrderCard key={ order.id } order={ order } />)
      }
    </div>
  );
}

export default ClientOrders;
