import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../contexts/auth';
import ProductCard from '../ProductCard';
import api from '../../api';

const ProdListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-between;

  & >* {
    margin: 10px;
  }
`;

function ProductList() {
  const { user, logoutNotAuthorized } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products.getAll(user.token).then(setProducts).catch(logoutNotAuthorized);
  }, []);

  if (products.length <= 0) return <h1>Loading</h1>;

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
        />
      ))}
    </ProdListContainer>
  );
}

export default ProductList;
