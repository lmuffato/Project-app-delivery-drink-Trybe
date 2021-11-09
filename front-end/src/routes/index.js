import React from 'react';
import { Route, Switch, BrowserRouter as Routes, Redirect } from 'react-router-dom';
import LoginPage from '../pages/Login';

function RoutesComponent() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ LoginPage } />
      </Switch>
    </Routes>
  );
}

export default RoutesComponent;
