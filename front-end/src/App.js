import React from 'react';
import './App.scss';
import Routes from './Routes';
import background from './images/background.png';

function App() {
  return (
    <div
      className="AppContainer"
      style={ { background: `url('${background}') center / cover fixed` } }
    >
      <div className="App">
        <Routes />
      </div>
    </div>
  );
}

export default App;
