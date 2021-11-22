import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import ProductCard from '../components/productCard';

function ProductClient() {
  const { products, total } = useContext(Context);
  const navigate = useNavigate();

  // setar CSS MASTER

  return (
    <>
      <button
        onClick={ () => navigate('/customer/checkout') }
        type="button"
      >
        { `Ver Carrinho: R$ ${total}` }
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
