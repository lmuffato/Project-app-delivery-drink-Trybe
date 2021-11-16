import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Route exact path="/customer/products" component={ ClientProducts } />
      <Route path="/customer/p" component={ ClientProducts } />
      <Route path="/register" component={ Register } />
    </>
  );
}

export default App;
