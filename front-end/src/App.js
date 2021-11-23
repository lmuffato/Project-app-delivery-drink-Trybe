import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/CartProvider';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import AdmPage from './pages/AdmPage';
import UsersProvider from './contexts/UsersProvider';

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route path="/customer/orders/:id" component={ OrderDetails } />
      <CartProvider>
        <Route exact path="/customer/products" component={ ClientProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
      </CartProvider>
      <UsersProvider>
        <Route exact path="/admin/manage" component={ AdmPage } />
      </UsersProvider>
    </>
  );
}

export default App;
