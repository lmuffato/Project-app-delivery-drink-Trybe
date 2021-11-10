import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './style.css';

function LeftSide() {
  return (
    <div className="left-side">
      <p>
        Nunca fiz amigos
        {' '}
        <br />
        {' '}
        bebendo
        {' '}
        <span className="typewriter-span">
          <Typewriter
            words={ ['Leite.', 'Nescau.', 'Água.'] }
            cursor
            loop={ 0 }
            cursorStyle="|"
          />
        </span>
      </p>
    </div>
  );
}

export default LeftSide;
