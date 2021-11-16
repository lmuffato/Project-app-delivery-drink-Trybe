import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/CartProvider';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <CartProvider>
        <Route exact path="/customer/products" component={ ClientProducts } />
      </CartProvider>
    </>
  );
}

export default App;
