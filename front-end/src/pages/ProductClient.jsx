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
        data-testid="customer_products__button-cart"
        type="button"
        disabled={ total === '0,00' }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          { `Ver Carrinho: R$ ${total}` }
        </span>
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
