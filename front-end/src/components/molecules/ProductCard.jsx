import React, { useEffect, useState } from 'react';
import '../../styles/ProductCard.css';
import { fetchProducts } from '../../utils/API/fetch';
// import ProductsContext from '../../context/Products/ProductsContext';

export default function ProductCard() {
  // const { count1, setCount1 } = useContext(ProductsContext);
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const getProducts = await fetchProducts({ token: 'xablau' });
      setProducts(getProducts);
      console.log(getProducts);
    })();
  }, []);

  const BRL = (price) => price
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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
      <div key={ prod.id } className="card-container text-black mb-3">
        <div className="card-body product-card-container">
          <p
            data-testid="customer_products__element-card-title"
            className="card-text"
          >
            {prod.name}
          </p>
          <div className="card-title">
            <h3
              data-testid="customer_products__element-card-price"
            >
              {BRL(prod.price)}
            </h3>
          </div>
          <img
            data-testid="customer_products__img-card-bg-image"
            src={ prod.urlImage }
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
