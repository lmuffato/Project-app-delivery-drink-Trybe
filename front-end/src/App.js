import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import { RegisterProvider } from './contexts/Register';
import Login from './pages/Login';
import { LoginProvider } from './contexts/Login';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route exact path="/">
        {/* Source:  https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb */}
        <Route path="/" element={ <Navigate to="/login" /> } />
      </Route>
      <Route
        exact
        path="/register"
        element={
          <RegisterProvider>
            <Register />
          </RegisterProvider>
        }
      />
      <Route
        path="/login"
        element={
          <LoginProvider>
            <Login />
          </LoginProvider>
        }
      />
      <Route exact path="/customer/products" element={ <Products /> } />

    </Routes>
  );
}

export default App;
