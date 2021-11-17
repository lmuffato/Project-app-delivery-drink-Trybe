import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
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
          <Route path="/admin" component={ Admin } />
          <Route path="/register" component={ SignUp } />
          <Route path="/customer/products" component={ Products } />
        </Switch>
      </DeliveryProvider>
    </BrowserRouter>
  );
}

export default App;
