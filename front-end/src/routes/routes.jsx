import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
// import NavBar from '../components/NavBar';
import Products from '../pages/Products';
import Sales from '../pages/Sales';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      {/* <NavBar id="NavBar" /> */}
      <Route exact path="/login" component={ Login } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/sales" component={ Sales } />
      <Route component={ NotFound } />
    </Switch>
  );
}
