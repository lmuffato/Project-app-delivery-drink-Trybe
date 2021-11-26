import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';

function ClientOrders() {
  const [orders, setOrders] = useState([]);

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
