import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import OrderCard from '../components/OrderCard';
import { OrdersContext } from '../contexts/Orders';
import NavBar from '../components/NavBar';

function Orders() {
  const { orderList, setOrderList } = useContext(OrdersContext);
  const testIds = {
    pageProductsId: 'customer_products__element-navbar-link-products',
    pageOrdersId: 'customer_products__element-navbar-link-orders',
    userId: 'customer_products__element-navbar-user-full-name',
    orderId: 'customer_orders__element-order-id-',
    orderStatus: 'customer_orders__element-delivery-status-',
    orderDate: 'customer_orders__element-order-date-',
    orderPrice: 'customer_order_details__element-order-details-label-order-id',
  };

  const navegationNames = {
    pageName: 'Meus pedidos',
  };

  useEffect(() => {
    const { token, id } = JSON.parse(localStorage.getItem('user'));

    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3001/orders/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        setOrderList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (!orderList.orders) return <h1>Loading...</h1>;
  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      { orderList.orders.map((order, key) => (
        <OrderCard key={ key } testIds={ testIds } order={ order } />))}
    </>
  );
}

export default Orders;
