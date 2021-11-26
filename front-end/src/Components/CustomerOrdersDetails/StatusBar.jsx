import React, { useContext, useState, useEffect } from 'react';
import NewOrderContext from '../../context/NewOrderContext';
import { updateSaleStatus, getOrderById } from '../../services/endpointsAPI';

const testIdTotal = 'customer_checkout__element-order-total-price';

export default function StatusBar() {
  const { orderSale, setOrderSale } = useContext(NewOrderContext);
  const [orderStatus, setOrderStatus] = useState('');

  // Atualiza o status do pedido no banco de dados e salva o status no estado local.
  const updateStatusInDatabase = async (status) => {
    const salleId = orderSale.id;
    await updateSaleStatus(salleId, status); // Os status possíveis são: 'Pendente', 'Preparando', 'Em Trânsito', 'Entregue'
    setOrderStatus(status);
  };

  // Faz uma requisição ao banco de dados trazendo os dados do pedido atualizados.
  const getOrderFromDataBase = async () => {
    const res = await getOrderById(orderSale.id);
    setOrderSale(res.sale);
  };

  // A atualização dos dados exibidos na tela depende da alteração do estado local.
  useEffect(() => {
    getOrderFromDataBase();
  }, [orderStatus]);

  // Acrescenta zeros a direita do número, como 50 => 0050.
  const printZerosOnRightSide = (num, zeros) => {
    const newNum = String(num).padStart(zeros, '0');
    return newNum;
  };

  // Converte a data do banco de dados no formato brasileiro dd/mm/yy.
  const dateConvertBrasilShape = (data) => {
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
        <span data-testid={ `${testIdTotal}` }>
          { `PEDIDO: ${printZerosOnRightSide(orderSale.id, zeros)}` }
        </span>);
    }
  };

  // Rendereiza o número o nome do vendedor na tela.
  const renderSelerName = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testIdTotal}` }>
          { `P. Vend: ${orderSale.sellerName}` }
        </span>);
    }
  };

  // Rendereiza a data do pedido na tela.
  const renderOrderDate = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      return (
        <span data-testid={ `${testIdTotal}` }>
          { `${dateConvertBrasilShape(orderSale.saleDate)}` }
        </span>);
    }
  };

  // Rendereiza o status do pedido na tela.
  const renderStatusSale = () => {
    if (Object.keys(orderSale).length !== 0 || orderSale !== undefined) {
      console.log(orderSale.status);
      return (
        <span data-testid={ `${testIdTotal}` }>
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
          data-testid={ `${testIdTotal}` }
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
