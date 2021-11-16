import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerHeader from '../components/CustomerHeader';
import CustomerProducts from './CustomerProducts';

function Customer() {
  return (
    <>
      <CustomerHeader />
      <Switch>
        <Route path="/customer/products" component={ CustomerProducts } />
      </Switch>
    </>
  );
}

export default Customer;
