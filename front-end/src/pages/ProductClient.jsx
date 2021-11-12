import React, { useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/header';
import ProductCard from '../components/productCard';

function ProductClient() {
  const { products, cartSum } = useContext(Context);
  // console.log(products);
  // setar CSS MASTER
  return (
    <>
      <Header client={ `${'nome'}` } />
      <button type="button">{`Ver Carrinho: R$ ${cartSum}`}</button>
      <div className="master">
        {
          products ? products.map((product, index) => (
            <ProductCard key={ index } product={ product } />))
            : <span> Vishe, deu ruim</span>
        }
      </div>

    </>
  );
}

export default ProductClient;
