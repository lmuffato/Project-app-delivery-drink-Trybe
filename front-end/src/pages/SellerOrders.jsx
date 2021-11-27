import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import NavBar from '../components/NavBar';
import { SellerOrdersContext } from '../contexts/SellerOrders';

function SellerOrders() {
  const { orderList } = useContext(SellerOrdersContext);

  const testIds = {
    pageProductsId: 'seller_products__element-navbar-link-products',
    pageOrdersId: 'seller_products__element-navbar-link-orders',
    userId: 'seller_products__element-navbar-user-full-name',
    orderId: 'seller_orders__element-order-id-',
    orderStatus: 'seller_orders__element-delivery-status-',
    orderDate: 'seller_orders__element-order-date-',
    orderPrice: 'customer_orders__element-card-price-',
  };

  const navegationNames = {
    pageName: 'Meus pedidos',
  };

  if (!orderList) return <h1>Loading...</h1>;
  console.log(orderList);
  return (
    <>
      <NavBar ids={ testIds } names={ navegationNames } />
      { orderList.map((order, key) => (
        <OrderCard key={ key } testIds={ testIds } order={ order } index={ key } />))}
    </>
  );
}

export default SellerOrders;
