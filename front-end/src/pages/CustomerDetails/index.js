import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import { deleteItem } from '../../slices/cart';
import Table from '../../components/Table';
import { useAuth } from '../../contexts/auth';
import Button from '../../components/Button';
import ProductOrderStatus from '../../components/ProductOrderStatus';

const ShadowContainer = styled.div`
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.shadow};
  padding: 10px 20px;
  margin-bottom: 40px;
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

function CustomerDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, logoutNotAuthorized } = useAuth();
  const navigation = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.sales.getById(id, user.token)
      .then(setData)
      .catch((x) => {
        logoutNotAuthorized(x);
        navigation('../');
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cb = (product) => {
    dispatch(deleteItem(product));
  };

  if (data === null) return <h1>Carregando</h1>;

  const { id: saleId, seller: { name: sellerName },
    saleDate, status, totalPrice, products } = data;

  const items = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.SalesProduct.quantity,
  }));

  return (
    <>
      <h2>Finalizar Pedido</h2>
      <ShadowContainer>
        <div className="head">
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {saleId}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {sellerName}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {(new Date(saleDate).toLocaleDateString('pt-br'))}
          </span>
          <ProductOrderStatus
            status={ status.toLowerCase() }
            testid="customer_order_details__element-order-details-label-delivery-status"
          />
          <Button
            variant="primary"
            datatestid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </Button>
        </div>
        <Table
          items={ items }
          onDelete={ cb }
          type="customer-details"
        />
        <Button
          variant="primary"
          disabled
          datatestid="customer_order_details__button-delivery-check"
        >
          R$
          <span data-testid="customer_order_details__element-order-total-price">
            {totalPrice.toFixed(2).replace(/\./, ',')}
          </span>
        </Button>
      </ShadowContainer>
    </>
  );
}

export default CustomerDetails;
