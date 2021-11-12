import React, { useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/header';
import ProductCard from '../components/productCard';

function ProductClient() {
  const { products, total, shoppingCart, postShoppingCart } = useContext(Context);
  // setar CSS MASTER

  return (
    <>
      <Header client={ `${'nome'}` } />
      <button
        onClick={ () => console.log(shoppingCart) }
        type="button"
      >
        { `Ver Carrinho: R$ ${total}` }
      </button>
      <button
        onClick={ () => postShoppingCart }
        type="button"
      >
        Esse botão envia o carrinho de compras para o BackEnd!
      </button>
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
