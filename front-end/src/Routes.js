import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp';
import Products from './pages/Products';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/register" component={ SignUp } />
        <Route path="/customer/products" component={ Products } />
      </Switch>
    </BrowserRouter>
  );
}
