import React from 'react';
import './App.css';
import Routes from './routes/routes';
import ProductsProvider from './context/Products/ProductsProvider';

function App() {
  return (
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  );
}

export default App;
