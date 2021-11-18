import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import { PricesProvider } from './context/productsProvider';
import './App.css';
import MyRequestsPage from './pages/MyRequestsPage';

function App() {
  const userStorage = localStorage.getItem('user');
  const keepUserLoggedIn = userStorage ? '/customer/products' : '/login';
  return (
    <Routes>
      <Route exact path="/login" element={ <LoginPage /> } />
      <Route path="/" element={ <Navigate replace to={ keepUserLoggedIn } /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route
        path="/customer/products"
        element={
          <PricesProvider>
            <ProductPage />
          </PricesProvider>
        }
      />
      <Route path="/customer/orders" element={ <MyRequestsPage /> } />
    </Routes>
  );
}

export default App;
