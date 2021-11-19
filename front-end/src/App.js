import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from '../node_modules/react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <>
      <Route exact path="/customer/products" component={ ClientProducts } />
      <Route path="/customer/p" component={ ClientProducts } />
      <Route path="/seller/orders" component={ SellerOrders } />
    </>
  );
}

export default App;
