import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/products" component={ Login } />
      <Route component={ NotFound } />
    </Switch>
  );
}
