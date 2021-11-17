import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHeader from '../components/CustomerHeader';
import CustomerProducts from './CustomerProducts';
import Checkout from './Checkout';

function Customer() {
  return (
    <>
      <CustomerHeader />
      <Switch>
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ Checkout } />
      </Switch>
    </>
  );
}

export default Customer;
