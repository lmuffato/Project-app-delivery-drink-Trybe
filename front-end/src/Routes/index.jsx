import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Auth from '../pages/Auth';
import ProductsList from '../pages/customer/Products';
import ProtectedRoute from './ProtectedRoute';
import AdminPage from '../pages/AdminPage';

export default function Routes() {
  return (
    <Switch>
      <Route path={ ['/login', '/register'] } component={ Auth } />
      <ProtectedRoute path={ ['/customer', '/'] }>
        <NavBar />
        <Route path="/admin/manage" component={ AdminPage } />
        <Route path="/customer/products" component={ ProductsList } />
        <Route exact path="/" render={ () => <Redirect to="/customer/products" /> } />
      </ProtectedRoute>
    </Switch>
  );
}
