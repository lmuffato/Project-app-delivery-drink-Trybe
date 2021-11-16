import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
