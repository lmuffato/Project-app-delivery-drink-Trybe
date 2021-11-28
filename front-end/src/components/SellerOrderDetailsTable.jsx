import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SellerOrdersContext } from '../contexts/SellerOrders';

function SellerOrderDetailsTable({ testIds }) {
  const [preparing, setPreparing] = useState(false);
  const [statusOrder, setStatusOrder] = useState('Pendente');
  const [enableDelivery, setEnableDelivery] = useState(true);
  const {
    orderId,
    sellerName,
    orderDate,
    orderStatus,
    buttonPreparing,
    buttonDelivery,
    tableItemNumber,
    tableItemName,
    tableItemQuantity,
    tableItemSubTotal,
    tableItemTotalPrice,
    tableTotalPrice,
  } = testIds;
  const params = useParams();
  const { id } = params;
  const { orderList } = useContext(SellerOrdersContext);
  let order;
  // let statusOrder = 'Pendente';

  console.log(orderList);
  if (orderList) {
    order = orderList.find(
      (el) => el.id.toString() === id,
    );
    // statusOrder = order.status;
    console.log(order);
  }

  useEffect(() => {
    if (order) {
      setStatusOrder(order.status);
    }
  }, [order]);

  useEffect(() => {
    if (statusOrder === 'Pendente') {
      setPreparing(false);
    } else {
      setPreparing(true);
    }
  }, [statusOrder]);

  const fillTable = (() => order.products && order.products.map(
    ({ id: productId, name, salesProducts: { quantity }, price }, key) => (
      <tr key={ key }>
        <td data-testid={ tableItemNumber + key }>
          { productId }
        </td>
        <td data-testid={ tableItemName + key }>
          { name }
        </td>
        <td data-testid={ tableItemQuantity + key }>
          { quantity }
        </td>
        <td data-testid={ tableItemSubTotal + key }>
          { Number(price).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
        <td data-testid={ tableItemTotalPrice + key }>
          { Number(price * quantity).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
      </tr>
    ),
  )
  );

  const updateStatus = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log('🚀 ~ file: SellerOrderDetailsTable.jsx ~ line 79 ~ updateStatus ~ token',
      token);
    // statusOrder = 'Preparando';
    setStatusOrder('Preparando');
    setEnableDelivery(false);
    try {
      await axios.put(`http://localhost:3001/orders/${id}`, {
        headers: {
          Authorization: token,
        },
      }, {
        status: 'Preparando',
      });
      // const { data } = await axios.get('http://localhost:3001/orders/customerId', {
      //   headers: {
      //     Authorization: token,
      //   },
      // });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!orderList) {
    return 'Loading';
  }

  console.log(statusOrder);

  const renderButtonPreparing = () => (
    <th>
      <button
        type="button"
        data-testid={ buttonPreparing }
        onClick={ updateStatus }
        disabled={ preparing }
      >
        Preparar pedido
      </button>
    </th>
  );

  const renderSaleHeader = () => (
    <tr>
      <th data-testid={ orderId }>{ `Pedido: ${id}` }</th>
      { sellerName && <th data-testid={ sellerName }>{ order.seller.name }</th> }
      <th data-testid={ orderDate }>{ moment(order.saleDate).format('DD/MM/YYYY') }</th>
      <th data-testid={ orderStatus }>{ statusOrder }</th>
      { buttonPreparing && renderButtonPreparing() }
      <th>
        <button
          type="button"
          data-testid={ buttonDelivery }
          disabled={ enableDelivery }
        >
          Marcar como entregue
        </button>
      </th>
    </tr>
  );

  return (
    <div>
      <table>
        <thead>
          { renderSaleHeader() }
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { fillTable() }
        </tbody>
      </table>
      <div data-testid={ tableTotalPrice }>
        { Number(order.totalPrice).toLocaleString('pt-BR', {
          currency: 'BRL',
          minimumFractionDigits: 2,
        }) }
      </div>
    </div>
  );
}

SellerOrderDetailsTable.propTypes = {
  testIds: PropTypes.shape({
    orderId: PropTypes.string,
    sellerName: PropTypes.string,
    orderDate: PropTypes.string,
    orderStatus: PropTypes.string,
    buttonPreparing: PropTypes.string,
    buttonDelivery: PropTypes.string,
    tableItemNumber: PropTypes.string,
    tableItemName: PropTypes.string,
    tableItemQuantity: PropTypes.string,
    tableItemSubTotal: PropTypes.string,
    tableItemTotalPrice: PropTypes.string,
    tableTotalPrice: PropTypes.string,
  }).isRequired,
};

export default SellerOrderDetailsTable;
