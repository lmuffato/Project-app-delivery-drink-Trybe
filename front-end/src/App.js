import React from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <Redirect to="/login" /> } />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
