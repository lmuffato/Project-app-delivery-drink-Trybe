import React from 'react';
import Routes from './Routes';
import DeliveryProvider from './Contexts/Deliveries/DeliveryProvider';
import UserProvider from './Contexts/User/userProvider';
import './App.css';

function App() {
  return (
    <DeliveryProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </DeliveryProvider>
  );
}

export default App;
