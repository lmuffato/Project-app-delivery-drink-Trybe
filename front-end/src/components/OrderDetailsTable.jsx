// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { OrdersContext } from '../contexts/Orders';

function OrderDetailsTable() {
  const params = useParams();
  const { id } = params;
  const { orderList: orders } = useContext(OrdersContext);
  const [values, setValues] = useState('');
  const { sellerId, totalPrice, saleDate, products } = values;
  useEffect(() => {
    if (orders) {
      const order = orderList.find(
        (el) => el.id.toString() === id,
      );
      setValues(order);
    }
  }, []);

  const getSeller = async () => {
    try {
      const response = await axios.get('http://localhost:3001/sellers', {
        headers: {
          Authorization: token,
        },
      });

      const { name } = response.find((seller) => seller.id === sellerId);

      return name;
    } catch (err) {
      console.log(err);
    }
  };
  const fillTable = (() => products.map(
    ({ id: productId, name, salesProducts: { quantity }, price }, key) => (
      <tr key={ key }>
        <td data-testid="">
          { productId }
        </td>
        <td data-testid="">
          { name }
        </td>
        <td data-testid="">
          { quantity }
        </td>
        <td data-testid="">
          { price }
        </td>
        <td data-testid="customer_order_details__element-order-table-sub-total-">
          { Number(price * quantity).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }) }
        </td>
        {/* <td data-testid=" customer_order_details__element-order-total-price-"> */ }
        {/* Colocar a vírgula na moeda: https://pt.stackoverflow.com/questions/264503/personalizar-o-tofixed-para-utilizar-v%C3%ADrgula-como-separador-decimal */ }
        {/* { Number(subTotal).toLocaleString('pt-BR', {
             currency: 'BRL',
              minimumFractionDigits: 2,
            }) }
          </td> */}
      </tr>
    ),
  )
  );

  if (!orders) {
    return 'Loading';
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{ `Pedido: ${id}` }</th>
            <th>{ getSeller() }</th>
            <th>{ moment(saleDate).format('DD/mm/yyyy') }</th>
            <th>a</th>
            <button type="button"> Marcar como entregue </button>
          </tr>
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
      <div>
        { `Total: ${totalPrice}` }
      </div>
    </div>
  );
}

export default OrderDetailsTable;
