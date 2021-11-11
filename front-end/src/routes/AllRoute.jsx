import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}
