import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Routes, Route } from 'react-router-dom';
import AdminManagerUsers from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <div>Xablau</div> } />
      <Route path="/admin/manage" exact element={ <AdminManagerUsers /> } />
    </Routes>
  );
}

export default App;
