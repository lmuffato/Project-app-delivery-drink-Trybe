import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MAX_ORDER_ID_CHARS = 4;
const PREFIX = 'customer_order_details__';

function OrderDetails() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/sales/${id}`)
      .then((res) => setOrder(res.data));
  }, []);

  return (
    <>
      <NavBar />
      Detalhes do Pedido
      { order.id && (
        <div>
          <p>
            <span
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              PEDIDO
              { ' ' }
              { `${order.id}`.padStart(MAX_ORDER_ID_CHARS, '0') }
              ;
            </span>
            { ' ' }
            <span
              data-testid={ `${PREFIX}element-order-details-label-seller-name` }
            >
              Fulana Pereira
            </span>
            { ' ' }
            <span
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              07/04/2021
            </span>
            { ' ' }
            <span
              data-testid={ `${PREFIX}element-order-details-label-delivery-status` }
            >
              {order.status}
            </span>
            { ' ' }
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
          </p>
          <table style={ { border: '1px solid black' } }>
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Descrição</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Valor Unitário</th>
                <th scope="col">Sub-total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-testid={ `${PREFIX}element-order-table-item-number-${1}` }>
                  1
                </td>
                <td data-testid={ `${PREFIX}element-order-table-name-${1}` }>
                  Cerveja Stella 250ml
                </td>
                <td data-testid={ `${PREFIX}element-order-table-quantity-${1}` }>
                  3
                </td>
                <td data-testid={ `${PREFIX}element-order-table-unit-price-${1}` }>
                  R$
                  { ' ' }
                  3,50
                </td>
                <td data-testid={ `${PREFIX}element-order-table-sub-total-${1}` }>
                  R$
                  { ' ' }
                  10,50
                </td>
              </tr>
            </tbody>
          </table>
          <p
            data-testid={ `${PREFIX}element-order-total-price` }
          >
            Total: R$ 28,46
          </p>
        </div>
      ) }
    </>
  );
}

export default OrderDetails;
