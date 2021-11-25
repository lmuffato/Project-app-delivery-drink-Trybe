import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Customer from './pages/Customer';
import Register from './pages/Register';

function App() {
  return (
    <div className="bg-gray-500">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route path="/login" component={ Login } />
          <Route path="/admin/manage" component={ Admin } />
          <Route path="/customer" component={ Customer } />
          <Route path="/register" component={ Register } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
