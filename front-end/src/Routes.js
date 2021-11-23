import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Login from './pages/Login';
import Checkout from './pages/Checkout/index';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Orders from './pages/orders';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/orders/:id" component={ Orders } />
        <Route path="/register" component={ SignUp } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/admin" component={ Admin } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
