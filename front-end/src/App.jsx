import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import CheckoutClient from './pages/CheckoutClient';
import ProductClient from './pages/ProductClient';
import PrivateRoute from './routes/PrivateRoute';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrderDetails from './pages/SellerOrderDetails';
import ClientOrders from './pages/ClientOrders';
import AdminManage from './pages/AdminManage';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
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
        element={ <PrivateRoute element={ CustomerOrderDetails } /> }
      />
      <Route
        path="/seller/orders/:id"
        element={ <PrivateRoute element={ SellerOrderDetails } /> }
      />
      <Route
        path="/admin/manage"
        element={ <PrivateRoute element={ AdminManage } /> }
      />
    </Routes>
  );
}

export default App;
