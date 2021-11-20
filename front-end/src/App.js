import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Login from './pages/Login';

const placeholderElement = (name) => (
  <div>
    <h1>{name}</h1>
    <Outlet />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Routes>

        <Route path="" element={ <Navigate to="login" /> } />
        <Route path="login" element={ <Login /> } />

        <Route path="customer" element={ placeholderElement('Customer') }>
          <Route index element={ <Navigate to="products" /> } />
          <Route path="products" element={ <p>products</p> } />
        </Route>

        <Route path="seller" element={ placeholderElement('Seller') }>
          <Route index element={ <Navigate to="orders" /> } />
          <Route path="orders" element={ <p>orders</p> } />
        </Route>

        <Route path="admin" element={ placeholderElement('Administrator') }>
          <Route index element={ <Navigate to="manage" /> } />
          <Route path="manage" element={ <p>manage</p> } />
        </Route>

        <Route path="*" element={ <h1>Not Found</h1> } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
