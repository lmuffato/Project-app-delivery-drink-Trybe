import React from 'react';
import Routes from './Routes';
import DeliveryProvider from './Contexts/Deliveries/DeliveryProvider';
import UserProvider from './Contexts/User/userProvider';
import './App.css';
<<<<<<< HEAD

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import meusPedidosCliente from './pages/meusPedidosCliente';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="pedido" component={ meusPedidosCliente } />
      </Switch>
    </BrowserRouter>
=======

function App() {
  return (
    <DeliveryProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </DeliveryProvider>
>>>>>>> 29c2580ec17b270fdd6827e925bd006b6309f599
  );
}

export default App;
