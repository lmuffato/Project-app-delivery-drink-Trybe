import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function CardProducts() {
  const { products, quantityProducts } = useContext(DeliveryContext);

  return (
    <div>
      {products.map((product) => (
        <div key={ product.id }>
          <h3>{product.price}</h3>
          <img src={ product.urlImage } alt="produto" />
          <h3>{product.name}</h3>
          <button type="button">-</button>
          <p>{ quantityProducts }</p>
          <button type="button">+</button>
        </div>
      ))}
    </div>
  );
}

export default CardProducts;
