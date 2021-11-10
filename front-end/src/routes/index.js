import React from 'react';
import { Route, Switch, BrowserRouter as Routes, Redirect } from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

function RoutesComponent() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
      </Switch>
    </Routes>
  );
}

export default RoutesComponent;
