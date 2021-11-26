import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Orders from './pages/Orders';

// rotas
import paths from './routesPaths/paths';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ paths.routeMain } exact>
          <Redirect to={ paths.routeLogin } />
        </Route>
        <Route path={ paths.routeLogin } exact component={ Login } />
        <Route path={ paths.routeRegister } exact component={ Register } />
        <Route path={ paths.routeProducts } exact component={ Products } />
        <Route path={ paths.routeOrders } exact component={ Orders } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
