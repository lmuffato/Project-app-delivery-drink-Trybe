import React from 'react';
import Button from './Button';
import Input from './Input';

function BaseComponent() {
  return (
    <div>
      <div>
        <h2>Botões</h2>
        <Button>PRIMÁRIO</Button>
        <Button btnType="secondary">SECUNDÁRIO</Button>
        <Button btnType="tertiary">Terciário</Button>
      </div>
      <div>
        <h2>Inputs</h2>
        <Input datatestid="oi" placeholder="oimundo" />
        <br />
        <Input datatestid="oi" placeholder="oimundo" label="Teste" />
      </div>
    </div>);
}

export default BaseComponent;
