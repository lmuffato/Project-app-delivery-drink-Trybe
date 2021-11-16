import React, { useState } from 'react';
import '../../styles/ProductCard.css';
// import ProductsContext from '../../context/Products/ProductsContext';

export default function ProductCard() {
  // const { count1, setCount1 } = useContext(ProductsContext);
  const [count, setCount] = useState(1);

  const BRL = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const price1 = 12.90;
  const price2 = 14.90;
  const price3 = 15.90;
  const img = 'https://cdn-veloxcode.s3.sa-east-1.amazonaws.com/banco-de-imagens/179J7yvZXHtX28zybgBladGh1hto3xrwRJZAIS9G.png';

  const products = [
    {
      title: 'Heineken longneck',
      price: BRL(price1),
      img,
    },
    {
      title: 'Brahma',
      price: BRL(price2),
      img,
    },
    {
      title: 'Corona',
      price: BRL(price3),
      img,
    },
  ];

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    products.map((prod) => (
      <div key={ prod } className="card-container text-black mb-3">
        <div className="card-body product-card-container">
          <p
            data-testid="customer_products__element-card-title"
            className="card-text"
          >
            {prod.title}
          </p>
          <div className="card-title">
            <h3
              data-testid="customer_products__element-card-price"
            >
              {prod.price}
            </h3>
          </div>
          <img
            data-testid="customer_products__img-card-bg-image"
            src={ prod.img }
            alt="heineken"
            style={ { width: 80 } }
          />
        </div>
        <div className="counter-container">
          <button
            data-testid="customer_products__button-card-add-item"
            className="btn-decrement"
            type="button"
            onClick={ () => decrement() }
          >
            -
          </button>
          <input
            className="card-header counter"
            value={ count }
            data-testid="customer_products__input-card-quantity"
          />
          <button
            data-testid="customer_products__button-card-rm-item"
            className="btn-increment"
            type="button"
            onClick={ () => increment() }
          >
            +
          </button>
        </div>
      </div>
    ))
  );
}
