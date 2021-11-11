import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Route exact path="/customer/products" component={ ClientProducts } />
      <Route path="/customer/p" component={ ClientProducts } />
    </>
  );
}

export default App;
