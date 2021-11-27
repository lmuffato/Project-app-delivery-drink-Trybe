import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';

import UserContext from '../context/userContext';

import { getOrderById } from '../services/endpointsAPI';

import Navbar from '../Components/NavBarSellers';

import '../Styles/SellerOrderDetails.css';

const dataTestId54 = 'seller_order_details__element-order-details-label-order-id-';
const dataTestId55 = 'seller_order_details__element-order-details-label-delivery-status-';
const dataTestId56 = 'seller_order_details__element-order-details-label-order-date-';
const dataTestId57 = 'seller_order_details__button-preparing-check';
const dataTestId58 = 'seller_order_details__button-dispatch-check';
const dataTestId59 = 'seller_order_details__element-order-table-item-number-';
const dataTestId60 = 'seller_order_details__element-order-table-name-';
const dataTestId61 = 'seller_order_details__element-order-table-quantity-';
const dataTestId62 = 'seller_order_details__element-order-table-unit-price-';
const dataTestId63 = 'seller_order_details__element-order-table-sub-total-';
const dataTestId64 = 'seller_order_details__element-order-total-price';

export default function SellerOrdersDetails() {
  const { userData } = useContext(UserContext);
  const { id } = useParams();
  const [itens, setItens] = useState([]);
  const [sale, setSale] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const loadingTag = <h3>Loading ...</h3>;

  useEffect(() => {
    setIsLoading(true);
    const { token } = userData;
    getOrderById(token, id)
      .then((result) => {
        setItens(result.itensList);
        setSale(result.sale);
        setIsLoading(false);
      });
  }, []);

  const putComma = (value) => value.toString().replace('.', ',');

  const convertDateFormat = (date) => {
    const numberEight = 8;
    const numberFive = 5;
    const numberFour = 4;
    const day = date.substr(numberEight, 2);
    const month = date.substr(numberFive, 2);
    const year = date.substr(0, numberFour);
    return `${day}/${month}/${year}`;
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th data-testid={ `${dataTestId54}-${id}` }>
            { `PEDIDO ${sale.id} ` }
          </th>
          <th data-testid={ `${dataTestId56}-${id}` }>
            { convertDateFormat(sale.saleDate) }
          </th>
          <th data-testid={ `${dataTestId55}-${id}` }>
            { sale.status }
          </th>
          <th>
            <button type="button" data-testid={ `${dataTestId57}` }>
              PREPARAR PEDIDO
            </button>
          </th>
          <th>
            <button
              type="button"
              data-testid={ `${dataTestId58}` }
              disabled={ `${true}` }
            >
              SAIU PARA ENTREGA
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Item</th>
          <th data-testid={ `${dataTestId60}-${id}` }>Descrição</th>
          <th data-testid={ `${dataTestId61}-${id}` }>Quantidade</th>
          <th data-testid={ `${dataTestId62}-${id}` }>Valor Unitário</th>
          <th data-testid={ `${dataTestId63}-${id}` }>Sub-total</th>
        </tr>
        { itens.map((item, index) => (
          <tr key={ index }>
            <th data-testid={ dataTestId59 }>
              { index + 1 }
            </th>
            <th data-testid={ dataTestId60 }>
              { item.name }
            </th>
            <th data-testid={ dataTestId61 }>
              { item.quantity }
            </th>
            <th data-testid={ dataTestId62 }>
              { putComma(item.price) }
            </th>
            <th data-testid={ dataTestId63 }>
              { putComma((item.price * item.quantity).toFixed(2)) }
            </th>
          </tr>
        ))}
        <tr>
          <th data-testid={ dataTestId64 }>
            { `TOTAL: R$ ${putComma(sale.totalPrice)}` }
          </th>
        </tr>
      </tbody>
    </table>
  );

  return (
    <main>
      <Navbar />
      <h3>Detalhe do Pedido</h3>
      <section>
        {
          isLoading
            ? loadingTag
            : renderTable()
        }
      </section>
    </main>
  );
}
