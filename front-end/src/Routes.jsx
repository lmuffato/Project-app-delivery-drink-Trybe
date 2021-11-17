import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import Auth from './pages/Auth';
import Products from './pages/customer/Products';

export default function Routes() {
  return (
    <Switch>
      <Route path="/customer/products" component={ Products } />
      <Route path="/login" component={ Auth } />
      <Route path="/register" component={ RegisterForm } />
      <Route path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
