import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterForm from './components/registerForm';
import Auth from './pages/Auth';

export default function Routes() {
  return (
    <Switch>
      <Route path={ ['/customer'] }>
        <NavBar />
        <Route path="/customer/products" render={ () => <h1>Produtos</h1> } />
      </Route>
      <Route path="/login" component={ Auth } />
      <Route path="/register" component={ RegisterForm } />
      <Route path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
