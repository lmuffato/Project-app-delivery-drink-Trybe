import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersProvider from './context/Users/UsersProvider';
import Router from './components/Router';

function App() {
  return (
    <UsersProvider>
      <Router />
    </UsersProvider>
  );
}

export default App;
