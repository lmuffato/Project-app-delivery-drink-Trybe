import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
