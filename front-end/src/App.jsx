import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductClient from './pages/ProductClient';
import CheckoutClient from './pages/CheckoutClient';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/customer/products" element={ <ProductClient /> } />
      <Route path="/customer/checkout" element={ <CheckoutClient /> } />
    </Routes>
  );
}

export default App;
