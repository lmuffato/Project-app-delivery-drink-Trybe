import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { OrdersContext } from '../contexts/Orders';
import NavBar from '../components/NavBar';

function SellerOrders() {
  const { orderList } = useContext(OrdersContext);

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

  if (!orderList) return <h1>Loading...</h1>;
  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      { orderList.orders.map((order, key) => (
        <OrderCard key={ key } testIds={ testIds } order={ order } />))}
    </>
  );
}

export default SellerOrders;
