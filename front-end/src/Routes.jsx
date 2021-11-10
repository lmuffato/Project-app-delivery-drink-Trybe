import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Auth } />
      <Route path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}
