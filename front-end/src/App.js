import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Customer from './pages/Customer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/customer" component={ Customer } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
