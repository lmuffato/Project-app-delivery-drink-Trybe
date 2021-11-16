import React from 'react';
import './App.scss';
import Routes from './Routes';
import background from './images/background.png';

function App() {
  return (
    <div className="App" style={ { background: `url('${background}') center / cover` } }>
      <Routes />
    </div>
  );
}

export default App;
