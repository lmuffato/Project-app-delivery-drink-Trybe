import React from 'react';
import { Route, Switch, BrowserRouter as Routes, Redirect } from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProductsPage from '../pages/ProductsPage';
import Orders from '../pages/Orders';
import OrderDetails from '../pages/OrderDetails';

function RoutesComponent() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/customer/products" component={ ProductsPage } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      </Switch>
    </Routes>
  );
}

export default RoutesComponent;
