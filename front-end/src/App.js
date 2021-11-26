import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import AppContainer from './components/AppContainer';
import { MainContainer } from './styles/containers';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerDetails from './pages/CustomerDetails';
import CustomerOrders from './pages/CustomerOrders';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <AuthProvider>
      <Routes>

        <Route path="" element={ <Navigate to="login" /> } />
        <Route path="login" element={ <MainContainer><Login /></MainContainer> } />
        <Route path="register" element={ <MainContainer><Register /></MainContainer> } />

        <Route path="customer" element={ <AppContainer /> }>
          <Route index element={ <Navigate to="products" /> } />
          <Route path="products" element={ <CustomerProducts /> } />
          <Route path="orders">
            <Route index element={ <CustomerOrders /> } />
            <Route path=":id" element={ <CustomerDetails /> } />
          </Route>
          <Route path="checkout" element={ <CustomerCheckout /> } />
        </Route>

        <Route path="seller" element={ <AppContainer /> }>
          <Route index element={ <Navigate to="orders" /> } />
          <Route path="orders" element={ <SellerOrders /> } />
        </Route>

        <Route path="admin" element={ <AppContainer /> }>
          <Route index element={ <Navigate to="manage" /> } />
          <Route path="manage" element={ <p>manage</p> } />
        </Route>

        <Route path="*" element={ <h1>Not Found</h1> } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
