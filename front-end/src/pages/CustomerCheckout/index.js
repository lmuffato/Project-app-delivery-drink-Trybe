import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import api from '../../api';
import { deleteItem } from '../../slices/cart';
import Table from '../../components/Table';
import { useAuth } from '../../contexts/auth';
import Button from '../../components/Button';
import SelectSeller from './SelectSeller';

const ShadowContainer = styled.div`
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.shadow};
  padding: 10px 20px;
  margin-bottom: 40px;
`;

function CustomerCheckout() {
  const dispatch = useDispatch();
  const cart = useSelector((st) => st.cart.products);
  const { user } = useAuth();
  const [items, setItems] = useState([]);

  const getItems = () => {
    const getItem = async (id) => api.products.getById(id, user.token);
    const promiseItems = cart.map(async (item, index) => (
      { ...(await getItem(item.id)), ...item, index }));

    Promise.all(promiseItems).then(setItems);
  };

  useEffect(() => {
    getItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const cb = (product) => {
    dispatch(deleteItem(product));
  };

  if (cart.length === 0) return <h1>Sem itens no carrinho</h1>;

  return (
    <>
      <h2>Finalizar Pedido</h2>
      <ShadowContainer>
        <Table
          items={ items }
          onDelete={ cb }
          type="customer-checkout"
        />
        <Button variant="primary">
          R$
          <span data-testid="customer_checkout__element-order-total-price">
            {items.reduce(
              (a, b) => a + b.price * b.quantity, 0,
            ).toFixed(2).replace('.', ',')}
          </span>
        </Button>
      </ShadowContainer>

      <h2>Detalhes e Endereço para Entrega</h2>
      <ShadowContainer>
        <SelectSeller />
      </ShadowContainer>

    </>
  );
}

export default CustomerCheckout;
