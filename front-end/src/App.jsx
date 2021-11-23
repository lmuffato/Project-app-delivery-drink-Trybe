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
import OrderClient from './pages/OrderClient';

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
        path="/seller/order"
        element={ <PrivateRoute element={ SellerOrders } /> }
      />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route
        path="/customer/products"
        element={ <PrivateRoute element={ ProductClient } /> }
      />
      <Route path="/customer/checkout" element={ <CheckoutClient /> } />
      <Route
        path="/customer/orders/9"
        element={ <PrivateRoute element={ OrderClient } /> }
      />
    </Routes>
  );
}

export default App;
