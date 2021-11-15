import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './pages/Customer/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/login" />
    <Route path="/login" component={ Login } />
    <Route path="/register" component={ Register } />
    <Route path="/customer/products" component={ Products } />
    <Route component={ NotFound } />
  </Switch>
);

export default App;
