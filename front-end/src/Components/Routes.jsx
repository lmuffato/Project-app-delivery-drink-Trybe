import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

export default function Rout() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
