import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DeliveryProvider from './Contexts/Deliveries/DeliveryProvider';
import UserProvider from './Contexts/User/userProvider';

// Components
import Login from './pages/Login';
import Checkout from './pages/Checkout/index';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';

export default function Router() {
  return (
    <BrowserRouter>
      <DeliveryProvider>
        <UserProvider>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/customer/checkout" component={ Checkout } />
            <Route exact path="/customer/orders" component={ Orders } />
            <Route path="/customer/orders/:id" component={ OrderDetails } />
            <Route path="/register" component={ SignUp } />
            <Route path="/customer/products" component={ Products } />
            <Route path="/admin" component={ Admin } />
            <Route exact path="/" component={ Login } />
          </Switch>
        </UserProvider>
      </DeliveryProvider>
    </BrowserRouter>
  );
}
