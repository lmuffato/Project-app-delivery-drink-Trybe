import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import '../styles/order.css';

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
    <div className="master">
      {
        orders.map((order) => <OrderCard key={ order.id } order={ order } />)
      }
    </div>
  );
}

export default ClientOrders;
