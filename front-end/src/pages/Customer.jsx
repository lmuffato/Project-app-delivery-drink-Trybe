import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHeader from '../components/CustomerHeader';
import CustomerProducts from './CustomerProducts';
import OrderDetails from './OrderDetails';
import Checkout from './Checkout';
import CustomerOrders from './CustomerOrders';

function Customer() {
  return (
    <>
      <CustomerHeader />
      <Switch>
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
        <Route path="/customer/orders" component={ CustomerOrders } />
      </Switch>
    </>
  );
}

export default Customer;
