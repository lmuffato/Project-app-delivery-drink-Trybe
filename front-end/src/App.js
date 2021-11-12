import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
// import CustomerProducts from './pages/CustomerProducts';
// <Route exact path="/customer/products" component={ CustomerProducts } />
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
