import React, { useState } from 'react';
import '../../styles/ProductCard.css';

export default function ProductCard() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card-container text-black mb-3">
      <div className="card-body product-card-container">
        <p className="card-text">Heineken longneck</p>
        <div className="card-title">
          <h3>R$12,90</h3>
        </div>
        <img
          src="https://cdn-veloxcode.s3.sa-east-1.amazonaws.com/banco-de-imagens/179J7yvZXHtX28zybgBladGh1hto3xrwRJZAIS9G.png"
          alt="heineken"
          style={ { width: 80 } }
        />
      </div>
      <div className="counter-container">
        <button
          className="btn-decrement"
          type="button"
          onClick={ () => decrement() }
        >
          -
        </button>
        <input className="card-header counter" value={ count } />
        <button
          className="btn-increment"
          type="button"
          onClick={ () => increment() }
        >
          +
        </button>
      </div>
    </div>
  );
}
