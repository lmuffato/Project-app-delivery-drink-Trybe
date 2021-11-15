import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Login from './pages/Login';
import Checkout from './pages/Checkout';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login" component={ Login } />

        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}
