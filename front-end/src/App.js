import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <SnackbarProvider>
      <Routes />
    </SnackbarProvider>
  );
}

export default App;
