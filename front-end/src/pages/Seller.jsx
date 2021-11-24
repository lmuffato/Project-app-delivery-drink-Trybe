import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SellerHeader from '../components/SellerHeader';
import SellerOrders from './SellerOrders';

function Customer() {
  return (
    <>
      <SellerHeader />
      <Switch>
        <Route path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </>
  );
}

export default Customer;
