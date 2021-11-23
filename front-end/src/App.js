import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminPage from './pages/AdminPage';
import { PricesProvider } from './context/productsProvider';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route
        path="/customer/products"
        element={ <PricesProvider><ProductPage /></PricesProvider> }
      />
      <Route
        path="/customer/checkout"
        element={ <PricesProvider><CheckoutPage /></PricesProvider> }
      />
      <Route path="/admin/manage" element={ <AdminPage /> } />
    </Routes>
  );
}

export default App;
