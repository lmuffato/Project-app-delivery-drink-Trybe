import React from 'react';
import './App.css';
import RoutesComponent from './routes';
import { CartProvider } from './hooks/useCart';
import { DeliveryProvider } from './hooks/useDeliveryDetails';
import ProviderProduct from './provider/product/ProviderProduct';

function App() {
  return (
    <DeliveryProvider>
      <CartProvider>
        <ProviderProduct>
          <RoutesComponent />
        </ProviderProduct>
      </CartProvider>
    </DeliveryProvider>
  );
}

export default App;
