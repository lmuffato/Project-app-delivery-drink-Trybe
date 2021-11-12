import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderProvider from './contexts/OrderProvider';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <OrderProvider>
        <Route exact path="/customer/products" component={ ClientProducts } />
      </OrderProvider>
    </>
  );
}

export default App;
