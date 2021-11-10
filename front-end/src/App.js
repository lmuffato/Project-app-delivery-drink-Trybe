import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Provider from './context/Provider';
// import Login from './pages/Login';
// import Register from './pages/Register';
import ProductClient from './pages/ProductClient';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          {/* <Route path="/login" element={ <Login /> } /> */}
          <Route path="/" element={ <ProductClient /> } />

        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
