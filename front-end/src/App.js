import React from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <LoginPage /> } />
    </Routes>
  );
}

export default App;
