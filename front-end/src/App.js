import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import AdminUsers from './pages/AdminUsers';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';
import CustomerOrders from './pages/CustomerOrders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ CustomerProducts } />
          <Route exact path="/customer/checkout" component={ CustomerCheckout } />
          <Route exact path="/customer/orders/:id" component={ CustomerOrders } />
          <Route exact path="/admin/manage" component={ AdminUsers } />
          <Route exact path="/seller/orders" component={ SellerOrders } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
