import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CustomerProducts from './pages/CustomerProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/customer/products" component={ CustomerProducts } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
