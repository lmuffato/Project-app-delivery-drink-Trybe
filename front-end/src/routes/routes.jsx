import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import CustomerOrders from '../pages/CustomerOrders';
import CustomerOrdersDetails from '../pages/CustomerOrdersDetails';
import Sales from '../pages/Sales';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/customer/orders/:id" component={ CustomerOrdersDetails } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/sales" component={ Sales } />
      <Route component={ NotFound } />
    </Switch>
  );
}
