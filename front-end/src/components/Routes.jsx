import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

export default function
Routes() {
  return (
    <Switch>
      <Route exact path="/register">
        <p>TELA DE REGISTRO</p>
      </Route>
    </Switch>
  );
}
