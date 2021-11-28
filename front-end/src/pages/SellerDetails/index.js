import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import Table from '../../components/Table';
import { useAuth } from '../../contexts/auth';
import Button from '../../components/Button';
import ProductOrderStatus from '../../components/ProductOrderStatus';
import useSocket from '../../hooks/useSocket';

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
  const { id } = useParams();
  const { user, logoutNotAuthorized } = useAuth();
  const navigation = useNavigate();
  const [data, setData] = useState(null);

  const getProduct = () => {
    api.sales.getById(id, user.token)
      .then(setData)
      .catch((x) => {
        logoutNotAuthorized(x);
        navigation('../');
      });
  };

  const { setStatus } = useSocket(getProduct);

  const changeStatus = (status) => setStatus(id, status);

  useEffect(() => {
    getProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data === null) return <h1>Carregando</h1>;

  const { id: saleId, saleDate, status, totalPrice, products } = data;

  const items = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.SalesProduct.quantity,
  }));

  const preparingIsDisabled = status === 'Preparando'
   || status === 'Entregue' || status === 'Em Trânsito';
  const deliverDisabled = status !== 'Preparando';

  return (
    <>
      <h2>Finalizar Pedido</h2>
      <ShadowContainer>
        <div className="head">
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {saleId}
          </span>
          <ProductOrderStatus
            status={ status.toLowerCase() }
            testid={ 'seller_order_details__ele'
            + 'ment-order-details-label-delivery-status' }
          />
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {(new Date(saleDate).toLocaleDateString('pt-br'))}
          </span>

          <Button
            variant="primary"
            datatestid="seller_order_details__button-preparing-check"
            onClick={ () => changeStatus('Preparando') }
            disabled={ preparingIsDisabled }
          >
            PREPARAR PEDIDO
          </Button>
          <Button
            variant="primary"
            disabled={ deliverDisabled }
            onClick={ () => changeStatus('Em Trânsito') }
            datatestid="seller_order_details__button-dispatch-check"
          >
            SAIU PARA ENTREGA
          </Button>
        </div>
        <Table
          items={ items }
          type="seller-details"
          onDelete={ () => {} }
        />
        <Button
          variant="primary"
          disabled
          datatestid="customer_order_details__button-delivery-check"
        >
          <>
            R$
            <span data-testid="seller_order_details__element-order-total-price">
              {totalPrice.toFixed(2).replace(/\./, ',')}
            </span>
          </>
        </Button>
      </ShadowContainer>
    </>
  );
}

export default CustomerDetails;
