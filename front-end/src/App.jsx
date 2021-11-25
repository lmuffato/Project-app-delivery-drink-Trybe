import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SellerOrders from './pages/SellerOrders';
import Register from './pages/Register';
import ProductClient from './pages/ProductClient';
import CheckoutClient from './pages/CheckoutClient';
import PrivateRoute from './routes/PrivateRoute';
import OrderDetails from './pages/OrderDetails';
import ClientOrders from './pages/ClientOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route
        path="/seller/order/:id"
        element={ <PrivateRoute element={ OrderDetails } /> }
      />
      <Route
        path="/seller/orders"
        element={ <PrivateRoute element={ SellerOrders } /> }
      />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route
        path="/customer/products"
        element={ <PrivateRoute element={ ProductClient } /> }
      />
      <Route path="/customer/checkout" element={ <CheckoutClient /> } />
      <Route
        path="/customer/orders/"
        element={ <PrivateRoute element={ ClientOrders } /> }
      />
      <Route
        path="/customer/orders/:id"
        element={ <PrivateRoute element={ OrderDetails } /> }
      />
    </Routes>
  );
}

export default App;
