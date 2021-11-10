import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <div>Xablau</div> } />
    </Routes>
  );
}

export default App;
