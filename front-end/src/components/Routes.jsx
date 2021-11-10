import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import RegisterForm from './registerForm';

export default function
Routes() {
  return (
    <Switch>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
    </Switch>
  );
}
