import React, { useContext, useState, useEffect } from 'react';
import NewOrderContext from '../../context/NewOrderContext';
import UserContext from '../../context/userContext';
import { updateSaleStatus, getOrderById } from '../../services/endpointsAPI';

const testId37 = 'customer_order_details__element-order-details-label-order-id';
const testId38 = 'customer_order_details__element-order-details-label-seller-name';
const testId39 = 'customer_order_details__element-order-details-label-order-date';
const testId40 = 'customer_order_details__element-order-details-label-delivery-status';
const testId47 = 'customer_order_details__button-delivery-check';

export default function StatusBar() {
  const { orderSale, setOrderSale } = useContext(NewOrderContext);
  const [orderStatus, setOrderStatus] = useState('');
  const { userData } = useContext(UserContext);
  const { disableBtnCustomer } = useContext(UserContext);

  // Atualiza o status do pedido no banco de dados e salva o status no estado local.
  const updateStatusInDatabase = async (status) => {
    const salleId = orderSale.id;
    await updateSaleStatus(salleId, status); // Os status possíveis são: 'Pendente', 'Preparando', 'Em Trânsito', 'Entregue'
    setOrderStatus(status);
  };

  // Faz uma requisição ao banco de dados trazendo os dados do pedido atualizados.
  const getOrderFromDataBase = async () => {
    const { token } = userData;
    const res = await getOrderById(token, orderSale.id);
    setOrderSale(res.sale);
  };

  useEffect(() => {
    getOrderFromDataBase();
  }, [orderStatus]);

  const addZerosOnRightSide = (num, zeros) => {
    const newNum = String(num).padStart(zeros, '0');
    return newNum;
  };

  const convertDateToBrasilShape = (data) => {
    const now = new Date(data);
    const str = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    return str;
  };

  const renderOrderNumber = () => {
    const zeros = 4;
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testId37}` }>
          { `PEDIDO: ${addZerosOnRightSide(orderSale.id, zeros)}` }
        </span>);
    }
  };

  const renderSelerName = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testId38}` }>
          { `P. Vend: ${orderSale.sellerName}` }
        </span>);
    }
  };

  const renderOrderDate = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testId39}` }>
          { `${convertDateToBrasilShape(orderSale.saleDate)}` }
        </span>);
    }
  };

  const renderStatusSale = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale.status !== undefined) {
      return (
        <span data-testid={ `${testId40}` }>
          { `${orderSale.status}` }
        </span>);
    }
  };

  const renderButtonToUpdateStatus = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <button
          type="button"
          id="Entregue"
          disabled={ `${disableBtnCustomer}` }
          onClick={ (e) => { updateStatusInDatabase(e.target.id); } }
          data-testid={ `${testId47}` }
        >
          MARCAR COMO ENTREGUE
        </button>
      );
    }
  };

  return (
    <div>
      { renderOrderNumber() }
      { renderSelerName() }
      { renderOrderDate() }
      { renderStatusSale() }
      { renderButtonToUpdateStatus() }
    </div>
  );
}
