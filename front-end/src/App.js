import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProviderLogin from './context/ProviderLogin';
import SignUp from './screens/SingUp';
import Login from './screens/Login';
import NotFound from './screens/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ProviderLogin>
        <Redirect from="/" to="/login" />
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route path="/register" component={ SignUp } />
          <Route component={ NotFound } />
        </Switch>
      </ProviderLogin>
    </BrowserRouter>
  );
}

export default App;
