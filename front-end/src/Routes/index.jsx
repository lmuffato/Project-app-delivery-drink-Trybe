import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Auth from '../pages/Auth';
import ProtectedRoute from './ProtectedRoute';

export default function Routes() {
  return (
    <Switch>
      <Route path={ ['/login', '/register'] } component={ Auth } />
      <ProtectedRoute path={ ['/customer', '/'] }>
        <NavBar />
        <Route path="/customer/products" render={ () => <h1>Produtos</h1> } />
        <Route path="/" render={ () => <Redirect to="/customer/products" /> } />
      </ProtectedRoute>
    </Switch>
  );
}
