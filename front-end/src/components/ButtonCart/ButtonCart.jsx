import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsContext from '../../context/ProductsContext';

function ButtonCart() {
  const { values: { totalCart } } = useContext(ProductsContext);
  const formatedValue = totalCart.toFixed(2).replace('.', ',');
  const redirect = useNavigate();

  const handleClick = () => {
    redirect('/customer/checkout');
  };

  return (
    <>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleClick }
      >
        Ver Carrinho:
      </button>
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { formatedValue }
      </span>
    </>
  );
}

export default ButtonCart;
