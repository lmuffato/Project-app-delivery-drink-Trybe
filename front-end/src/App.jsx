import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import PedidosVendedor from './pages/PedidosVendedor';
import Register from './pages/Register';
import ProductClient from './pages/ProductClient';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/seller/order" element={ <PedidosVendedor /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/products" element={ <ProductClient /> } />
    </Routes>
  );
}

export default App;
