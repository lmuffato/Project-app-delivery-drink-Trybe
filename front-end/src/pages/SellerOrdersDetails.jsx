import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import NavBar from '../components/CustomerNavBar';

function SellerOrdersDetails({ match }) {
  const [order, setOrder] = useState([]);
  const { id } = match.params;

  async function getOrder() {
    const reqeust = await axios.get(`http://localhost:3001/user/sale/${id}`);
    const mySale = reqeust.data;
    setOrder(mySale);
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <NavBar fixed="top" />
      <h3>Detalhe do Pedido</h3>
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
            order.map((item, index) => (
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
                    { item.quantity }
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
                    { (item.price * item.quantity)
                      .toFixed(2).toString().replace('.', ',') }
                  </span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

SellerOrdersDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default SellerOrdersDetails;
