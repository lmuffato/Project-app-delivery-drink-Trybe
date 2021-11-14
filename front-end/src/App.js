import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RegisterProvider } from './contexto/register';
import login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/"><Redirect to="/login" /></Route>
      <Route path="/login" component={ login } />
      <Route path="/register">
        <RegisterProvider>
          <Register />
        </RegisterProvider>
      </Route>
    </Switch>
  );
}

export default App;
