import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import Routes from './routes/Routes';
import CheckoutProvider from './context/checkoutProvider';

function App() {
  return (
    <CheckoutProvider>
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </CheckoutProvider>
  );
}

export default App;
