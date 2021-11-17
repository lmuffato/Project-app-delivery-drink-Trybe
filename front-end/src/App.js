import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import DeliveryProvider from './provider/DeliveryProvider';

function App() {
  return (
    <BrowserRouter>
      <DeliveryProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ SignUp } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/checkout" component={ Checkout } />
        </Switch>
      </DeliveryProvider>
    </BrowserRouter>
  );
}

export default App;
