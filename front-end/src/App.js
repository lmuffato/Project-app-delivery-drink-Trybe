import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
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
