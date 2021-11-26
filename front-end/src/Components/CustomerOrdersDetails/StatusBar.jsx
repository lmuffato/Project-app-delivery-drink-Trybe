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

  // A atualização dos dados exibidos na tela depende da alteração do estado local.
  useEffect(() => {
    getOrderFromDataBase();
  }, [orderStatus]);

  // Acrescenta zeros a direita do número, como 50 => 0050.
  const addZerosOnRightSide = (num, zeros) => {
    const newNum = String(num).padStart(zeros, '0');
    return newNum;
  };

  // Converte a data do banco de dados no formato brasileiro dd/mm/yy.
  const convertDateToBrasilShape = (data) => {
    const now = new Date(data);
    const str = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    return str;
  };

  // Coloca o texto em caixa alta.
  const changeToUperCase = (string) => {
    if (string !== undefined) {
      const uperCaseString = string.toUpperCase();
      return uperCaseString;
    }
  };

  // Rendereiza o número da ordem na tela.
  const renderOrderNumber = () => {
    const zeros = 4;
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testId37}` }>
          { `PEDIDO: ${addZerosOnRightSide(orderSale.id, zeros)}` }
        </span>);
    }
  };

  // Rendereiza o número o nome do vendedor na tela.
  const renderSelerName = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testId38}` }>
          { `P. Vend: ${orderSale.sellerName}` }
        </span>);
    }
  };

  // Rendereiza a data do pedido na tela.
  const renderOrderDate = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testId39}` }>
          { `${convertDateToBrasilShape(orderSale.saleDate)}` }
        </span>);
    }
  };

  // Rendereiza o status do pedido na tela.
  const renderStatusSale = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      console.log(orderSale.status);
      return (
        <span data-testid={ `${testId40}` }>
          { `${changeToUperCase(orderSale.status)}` }
        </span>);
    }
  };

  // Rendereiza o botão para atualizar o estado do pedido.
  const renderButtonToUpdateStatus = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <button
          type="button"
          id="Entregue"
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
