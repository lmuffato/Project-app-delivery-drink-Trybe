import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import ProductCard from './ProductCard';
import ProductQty from './ProductQty';
import ProductOrderStatus from './ProductOrderStatus';
import ProductOrderCard from './ProductOrderCard';
import Navbar from './Navbar';

function BaseComponent() {
  const [qty, setQty] = useState(0);
  return (
    <div>
      <div>
        {window.ScreenOrientation.toString()}
        {window.visualViewport.width}
        <h2>Botões</h2>
        <Button>PRIMÁRIO</Button>
        <Button btnType="secondary" onClick={ () => alert('alerta') }>SECUNDÁRIO</Button>
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
            onRemove={ () => setQty((st) => st - 1) }
            onAdd={ () => setQty((st) => st + 1) }
            value={ qty }
            id={ 10 }
          />
        </div>
      </div>
      <div>
        <h2>Product Card</h2>
        <div style={ { margin: '0 auto', maxWidth: '400px' } }>
          <ProductCard
            id="id-test"
            price={ 666.0 }
            description="description-test"
            image="https://media.istockphoto.com/photos/glass-of-fresh-beer-with-green-hops-isolated-on-white-background-picture-id691122340?s=612x612"
            alt="alt-teste"
          />
        </div>
      </div>
      <div>
        <ProductOrderStatus status="pending" />
        <ProductOrderStatus status="delivered" />
        <ProductOrderStatus status="preparing" />
      </div>
      <div>
        <h1>card de pedido do produto</h1>
        <ProductOrderCard
          adress="Avenida cônego domingos maltês"
          date="date"
          price={ 100 }
          address="endereço com"
          orderId="meuid"
          status="pending"
          testIdOrderStatus="idtestid"
        />
      </div>
      <div>
        <Navbar userType="customer" username="murilo" />
        <Navbar active userType="seller" username="murilo" />
        <Navbar userType="admin" username="murilo" />
      </div>
    </div>);
}

export default BaseComponent;
