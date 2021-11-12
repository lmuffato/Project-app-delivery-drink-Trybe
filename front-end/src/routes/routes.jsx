import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';
import Sales from '../pages/Sales';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
<<<<<<< HEAD
      <Route exact path="/register" component={ Register } />
      <div id="NavBar">
        <Route exact path="/products" component={ Login } />
      </div>
=======
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/sales" component={ Sales } />
>>>>>>> 2efbe5983fbd464f50f4d1a40af6a6adbe7ea511
      <Route component={ NotFound } />
    </Switch>
  );
}
