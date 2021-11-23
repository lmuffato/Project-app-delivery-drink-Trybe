import React from 'react';
import './App.css';
import RoutesComponent from './routes';
import { CartProvider } from './hooks/useCart';
import ProviderProduct from './provider/product/ProviderProduct';

function App() {
  return (
    <CartProvider>
      <ProviderProduct>
        <RoutesComponent />
      </ProviderProduct>
    </CartProvider>
  );
}

export default App;
