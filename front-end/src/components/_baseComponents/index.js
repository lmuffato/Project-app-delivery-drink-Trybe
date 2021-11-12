import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import ProductQty from './ProductQty';

function BaseComponent() {
  const [qty, setQty] = useState(0);
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
        <div style={ { margin: '0 auto', maxWidth: '400px' } }>
          <Input datatestid="oi" placeholder="oimundo" />
          <Input datatestid="oi" placeholder="oimundo" label="Teste" />
        </div>
      </div>
      <div>
        <h2>Add/Remove product component</h2>
        <div style={ { margin: '0 auto', maxWidth: '400px' } }>
          <ProductQty
            label="Descrição"
            onMinus={ () => setQty((st) => st - 1) }
            onPlus={ () => setQty((st) => st + 1) }
            value={ qty }
            id={ 10 }
          />
        </div>
      </div>
    </div>);
}

export default BaseComponent;
