import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';

function App() {
  return (
    <Routes>
      <Route exact path="/">
        {/* Source:  https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb */}
        <Route path="/" element={ <Navigate replace to="/login" /> } />
      </Route>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
