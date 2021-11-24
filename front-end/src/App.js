import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Seller from './pages/Seller';
import Customer from './pages/Customer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer" component={ Customer } />
      <Route path="/seller" component={ Seller } />
    </Switch>
  );
}

export default App;
