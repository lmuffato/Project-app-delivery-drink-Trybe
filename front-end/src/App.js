import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ClientProducts from './pages/CustomerProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderProvider from './contexts/OrderProvider';

function App() {
  return (
    <>
      <OrderProvider>
        <Route exact path="/customer/products" component={ ClientProducts } />
      </OrderProvider>
      <Route path="/customer/p" component={ ClientProducts } />
    </>
  );
}

export default App;
