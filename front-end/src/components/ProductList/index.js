import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import ProductCard from '../ProductCard';
import Button from '../Button';
import api from '../../api';

const ProdListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-between;
  position: relative;

  & > * { margin: 10px; }

  .see-cart { 
    font-size: 20px;
    position: fixed;
    bottom: 10px;
    right: 0px;
  }
`;

function ProductList() {
  const cart = useSelector((st) => st.cart.products);
  const { user, logoutNotAuthorized } = useAuth();
  const [products, setProducts] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    api.products.getAll(user.token).then(setProducts).catch(logoutNotAuthorized);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (products.length <= 0) return <h1>Loading</h1>;

  const total = cart.map((item) => {
    const index = products.findIndex((prod) => prod.id === item.id);
    const { price } = products[index];
    const { quantity } = item;
    return price * quantity;
  }).reduce((a, b) => a + b, 0);

  return (
    <ProdListContainer>
      {products.map(({ id, price, name, urlImage }) => (
        <ProductCard
          key={ id }
          id={ id }
          price={ price }
          description={ name }
          image={ urlImage }
          alt={ name }
          initialQty={
            !cart.find((item) => item.id === id)
              ? 0
              : cart.find((item) => item.id === id).quantity
          }
        />
      ))}
      <Button
        className="see-cart"
        variant="primary"
        onClick={ () => navigation('../checkout') }
        datatestid="customer_products__button-cart"
        disabled={ cart.length <= 0 }
      >
        <>
          VER CARRINHO: R$
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {total.toFixed(2).replace('.', ',')}
          </span>
        </>
      </Button>
    </ProdListContainer>
  );
}

export default ProductList;
