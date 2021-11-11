import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <>
      <Login />
      {/* <Register />
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/login" exact component={ Login } />
        <Route path="/register" exact component={ Register } />
      </Switch> */}
    </>
  );
}

export default App;
