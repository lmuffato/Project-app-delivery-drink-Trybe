import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ CustomerProducts } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
