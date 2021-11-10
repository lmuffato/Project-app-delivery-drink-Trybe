import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProviderLogin from './context/ProviderLogin';
import SignUp from './screens/SingUp';
import Login from './screens/Login';
import ToDo from './screens/ToDo';
import NotFound from './screens/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ProviderLogin>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/register" component={ SignUp } />
          <Route component={ NotFound } />
        </Switch>
      </ProviderLogin>
    </BrowserRouter>
  );
}

export default App;