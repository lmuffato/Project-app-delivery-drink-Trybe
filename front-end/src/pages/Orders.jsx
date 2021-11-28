import React, { useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const buttonsList = [
    { name: 'MEUS PEDIDOS',
      value: 'orders',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.name;
  const getOrders = async () => {
    await axios({
      method: 'get',
      url: 'http://localhost:3001/sales',
      headers: {
        Authorization: user.token,
      },
    })
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
        console.log(orders);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrders();
  });
  return (
    <div className="w-full h-full bg-gray-500">
      <NavBar buttonsList={ buttonsList } clientName={ username } />
      <div className="flex content-center">
        {
          // renderizar cards dos pedidos.
        }
      </div>
    </div>
  );
}
