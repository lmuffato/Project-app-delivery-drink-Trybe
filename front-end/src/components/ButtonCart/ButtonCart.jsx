import React from 'react';

function ButtonCart() {
  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
    >
      <p>Ver Carrinho:</p>
      <span data-testid="customer_products__checkout-button-value">Valor Total</span>
    </button>
  );
}

export default ButtonCart;
