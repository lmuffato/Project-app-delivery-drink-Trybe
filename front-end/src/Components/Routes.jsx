import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Login from './Login';

export default function Rout() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
