import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Products from './pages/Products';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
