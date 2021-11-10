import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}
