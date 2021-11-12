import React from 'react';
import Button from './Button';

export default function () {
  return (
    <div>
      <div>
        <h2>Botões</h2>
        <Button>PRIMÁRIO</Button>
        <Button btnType="secondary">SECUNDÁRIO</Button>
        <Button btnType="tertiary">Terciário</Button>
      </div>
    </div>);
}
