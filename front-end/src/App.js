import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import { RegisterProvider } from './contexts/Register';
import Login from './pages/Login';
import { LoginProvider } from './contexts/Login';
import Products from './pages/Products';
import CustomerOrders from './pages/CustomerOrders';
import { OrdersProvider } from './contexts/Orders';
import { ProductsProvider } from './contexts/Products';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrders from './pages/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails';

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
      <Route
        exact
        path="/customer/products"
        element={
          <ProductsProvider>
            <Products />
          </ProductsProvider>
        }
      />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/admin/manage" element={ <Admin /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route
        exact
        path="/customer/orders"
        element={
          <OrdersProvider>
            <CustomerOrders />
          </OrdersProvider>
        }
      />
      <Route
        exact
        path="/customer/orders/:id"
        element={
          <OrdersProvider>
            <CustomerOrderDetails />
          </OrdersProvider>
        }
      />
      <Route
        exact
        path="/seller/orders"
        element={
          <OrdersProvider>
            <SellerOrders />
          </OrdersProvider>
        }
      />
      <Route
        exact
        path="/seller/orders/:id"
        element={
          <OrdersProvider>
            <SellerOrderDetails />
          </OrdersProvider>
        }
      />
    </Routes>
  );
}

export default App;
