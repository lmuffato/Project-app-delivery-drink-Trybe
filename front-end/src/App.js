import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Products } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
