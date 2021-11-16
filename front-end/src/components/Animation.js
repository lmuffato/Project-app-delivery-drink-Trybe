import React from 'react';
import '../styles/animation.css';
import rockGlass from '../images/rockGlass.svg';

function Animation() {
  return (
    <div className="App">
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default Animation;
