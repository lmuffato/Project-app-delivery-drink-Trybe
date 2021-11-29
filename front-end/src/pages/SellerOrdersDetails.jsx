import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/CustomerNavBar';
import SocketContext from '../contexts/SocketContext';

function SellerOrdersDetails({ match }) {
  const [order, setOrder] = useState(null);
  const [disableButton, setdisableButton] = useState(true);
  const [transitButton, setTransitButton] = useState(true);
  const {
    orderStatus, setOrderStatus, clientEmitStatus, setOrderId,
  } = useContext(SocketContext);
  const { id } = match.params;

  async function setSaleStatus(status) {
    await axios.patch(`http://localhost:3001/sale/${id}`, { status });
    setOrderStatus(status);
    clientEmitStatus(status, id);
  }

  useEffect(() => {
    async function getOrder() {
      const request = await axios.get(`http://localhost:3001/sale/${id}`);
      const mySale = request.data;
      setOrder(mySale);
      setOrderStatus(mySale.status);
    }
    getOrder();
    setOrderId(id);
    console.log(id);
  }, [id]);

  useEffect(() => {
    async function prepareStatus() {
      if (orderStatus !== 'Pendente') {
        setdisableButton(true);
      } else {
        setdisableButton(false);
      }
    }

    async function transitStatus() {
      if (orderStatus !== 'Preparando') {
        setTransitButton(true);
      } else {
        setTransitButton(false);
      }
    }
    prepareStatus();
    transitStatus();
  }, [orderStatus]);

  function tableRow() {
    return (
      <tr>
        <th>
          PEDIDO 000
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {id}
          </span>
        </th>
        <th
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { moment(order.sale_date).format(('DD/MM/YYYY')) }
        </th>
        <th
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {orderStatus}
        </th>
        <th>
          <Button
            variant="success"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => setSaleStatus('Preparando') }
            disabled={ disableButton }
          >
            PREPARAR PEDIDO
          </Button>
        </th>
        <th>
          <Button
            variant="success"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ () => setSaleStatus('Em Trânsito') }
            disabled={ transitButton }
          >
            SAIU PARA ENTREGA
          </Button>
        </th>
      </tr>
    );
  }

  if (!order) return <p>Carregando...</p>;

  return (
    <div>
      <NavBar fixed="top" />
      <h3>Detalhe do Pedido</h3>
      <br />
      <Table>
        <thead>
          { tableRow() }
        </thead>
      </Table>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {
            order.products.map((item, index) => (
              <tr key={ item.name }>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                >
                  { item.name }
                </td>
                <td>
                  <span
                    data-testid={
                      `seller_order_details__element-order-table-quantity-${index}`
                    }
                  >
                    { item.salesProduct.quantity }
                  </span>
                </td>
                <td>
                  R$
                  <span
                    data-testid={
                      `seller_order_details__element-order-table-unit-price-${index}`
                    }
                  >
                    { item.price.replace('.', ',') }
                  </span>
                </td>
                <td>
                  R$
                  <span
                    data-testid={
                      `seller_order_details__element-order-table-sub-total-${index}`
                    }
                  >
                    { (item.price * item.salesProduct.quantity)
                      .toFixed(2).toString().replace('.', ',') }
                  </span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Button
        variant="success"
        data-testid="seller_order_details__element-order-total-price"
      >
        { order.total_price.replace('.', ',') }
      </Button>
    </div>
  );
}

SellerOrdersDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default SellerOrdersDetails;
