import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/CartProvider';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <CartProvider>
        <Route exact path="/customer/products" component={ ClientProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
      </CartProvider>
      <Route path="/seller/orders" component={ SellerOrders } />
    </>
  );
}

export default App;
