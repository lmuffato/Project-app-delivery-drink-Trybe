import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SellerHeader from '../components/SellerHeader';
import SellerOrders from './SellerOrders';
import SellerOrdersDetails from './SellerOrdersDetails';

function Customer() {
  return (
    <>
      <SellerHeader />
      <Switch>
        <Route path="/seller/orders/:id" component={ SellerOrdersDetails } />
        <Route path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </>
  );
}

export default Customer;
