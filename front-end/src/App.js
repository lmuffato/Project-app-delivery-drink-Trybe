import React from 'react';
import './App.css';
import RoutesComponent from './routes';
import ProviderProduct from './provider/product/ProviderProduct';

import ProviderProduct from './provider/Product/ProviderProduct';

function App() {
  return (
    <ProviderProduct>
      <RoutesComponent />
    </ProviderProduct>
  );
}

export default App;
