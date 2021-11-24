import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../../context/Products/ProductsContext';

export default function CartBox() {
  const { totalPrice, BRL } = useContext(ProductsContext);
  return (
    <Link
      className="cartbox"
      to="/customer/checkout"
    >
      <Button
        data-testid="customer_products__button-cart"
        disabled={ totalPrice === 0 }
      >
        Ver Carrinho:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { `${BRL(totalPrice)}` }
        </span>
      </Button>
    </Link>
  );
}
