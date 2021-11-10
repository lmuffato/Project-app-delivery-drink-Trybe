import React from 'react';
import '../styles/form.css';
// import Context from '../context/Context';
import Header from '../components/header';
// import ProductCard from '../components/productCard';

function ProductClient() {
  // const { products } = useContext(Context);

  return (
    <>
      <Header client={ `${'nome'}` } />
      {/* {
        product.lenght > 0
          ? products.map((product, index) => (
            <ProductCard key={ index } product={ product } />))
          : <span> Vishe, deu ruim</span>
      } */}
    </>
  );
}

export default ProductClient;
