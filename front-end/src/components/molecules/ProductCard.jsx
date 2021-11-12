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
    <div className="container">
      <div
        className="card-container text-black mb-3"
      >
        <div className="card-body product-card-container">
          <h5 className="card-title">R$12,90</h5>
          <p className="card-text">Heineken longneck</p>
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
    </div>
  );
}
