import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <NavBar id="NavBar">
        <Route exact path="/products" component={ Login } />
      </NavBar>
      <Route component={ NotFound } />
    </Switch>
  );
}
