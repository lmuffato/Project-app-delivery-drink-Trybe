import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <div id="NavBar">
        <Route exact path="/products" component={ Login } />
      </div>
      <Route component={ NotFound } />
    </Switch>
  );
}
