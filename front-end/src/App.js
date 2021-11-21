import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import Routes from './routes/Routes';

function App() {
  return (
    <SnackbarProvider>
      <Routes />
    </SnackbarProvider>
  );
}

export default App;
