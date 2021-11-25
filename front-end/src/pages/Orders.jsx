import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import { OrdersContext } from '../contexts/Orders';
// import NavBar from '../components/NavBar';

function Orders() {
  const orderList = useContext(OrdersContext);
  console.log(orderList.orders);
  // console.log(props);

  if (!orderList.orders) return <h1>Loading...</h1>;
  return (
    <div>
      {/* <NavBar /> */}
      {/* <UserForm />
      <UsersTable /> */}
      {
        orderList.orders
          .map((order, index) => <OrderCard key={ index } order={ order } />)
      }
    </div>
  );
}

export default Orders;
