import React from 'react';
// import Context from '../context/Context';
import Header from '../components/header';
import ProductCard from '../components/productCard';

function ProductClient() {
  // const { products } = useContext(Context);

  // setar CSS MASTER

  return (
    <>
      <Header client={ `${'nome'}` } />
      {/* {
        product.lenght > 0
          ? products.map((product, index) => (
            <ProductCard key={ index } product={ product } />))
          : <span> Vishe, deu ruim</span>
      } */}
      <div className="master">
        <ProductCard />
        <ProductCard />

        <ProductCard />
        <ProductCard />

      </div>

    </>
  );
}

export default ProductClient;
