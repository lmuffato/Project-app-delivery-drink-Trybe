import React from 'react';
import './App.css';

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
  );
}

export default App;
