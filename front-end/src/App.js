import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './contexts/CartProvider';
import Login from './pages/Login';
import CustomerCheckout from './pages/CustomerCheckout';
import SellerOrders from './pages/SellerOrders';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import AdmPage from './pages/AdmPage';
import SellerOrderDetails from './pages/SellerOrdersDetails';
import UsersProvider from './contexts/UsersProvider';
import SocketProvider from './contexts/SocketProvider';

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <SocketProvider>
        <Route exact path="/customer/orders" component={ Orders } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
        <Route
          path="/seller/orders/:id"
          render={ (p) => <SellerOrderDetails { ...p } /> }
        />
      </SocketProvider>
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
