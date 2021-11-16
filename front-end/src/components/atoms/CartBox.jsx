import React, { useContext } from 'react';
import ProductsContext from '../../context/Products/ProductsContext';

export default function CartBox() {
  const { count } = useContext(ProductsContext);

  return (
    <div className="cartbox">
      <p>{`Ver Carinho: R$ ${count}`}</p>
    </div>
  );
}
