import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getOrderById } from '../services/endpointsAPI';

import Navbar from '../Components/NavBarSellers';

import '../Styles/SellerOrderDetails.css';

const dataTestId54 = 'seller_order_details__element-order-details-label-order-id';
const dataTestId55 = 'seller_order_details__element-order-details-label-delivery-status';
const dataTestId56 = 'seller_order_details__element-order-details-label-order-date';
const dataTestId57 = 'seller_order_details__button-preparing-check';
const dataTestId58 = 'seller_order_details__button-dispatch-check';
// const dataTestId59 = 'seller_order_details__element-order-table-item-number';
// const dataTestId60 = 'seller_order_details__element-order-table-name';
// const dataTestId61 = 'seller_order_details__element-order-table-quantity';
// const dataTestId62 = 'seller_order_details__element-order-table-unit-price';
// const dataTestId63 = 'seller_order_details__element-order-table-sub-total';
// const dataTestId64 = 'seller_order_details__element-order-total-price';

export default function SellerOrdersDetails() {
  const { id } = useParams();
  const [itens, setItens] = useState([]);
  const [sale, setSale] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const loadingTag = <h3>Loading ...</h3>;

  useEffect(() => {
    setIsLoading(true);
    getOrderById(id)
      .then((result) => (
        setItens(result.itensList),
        setSale(result.sale),
        setIsLoading(false)
      ));
  }, []);

  const renderTable = () => (
    <table>
      { console.log(sale)}
      { console.log(itens)}
      <thead>
        <tr>
          <th data-testid={ `${dataTestId54}-${id}` }>
            { `PEDIDO ${sale.id} ` }
          </th>
          <th data-testid={ `${dataTestId56}-${id}` }>
            { sale.saleDate }
          </th>
          <th data-testid={ `${dataTestId55}-${id}` }>
            { sale.status }
          </th>
          <th>
            <button type="button" data-testid={ `${dataTestId57}-${id}` }>
              PREPARAR PEDIDO
            </button>
          </th>
          <th>
            <button type="button" data-testid={ `${dataTestId58}-${id}` }>
              SAIU PARA ENTREGA
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>
            <div>
              { `TOTAL: R$ ${sale.totalPrice}` }
            </div>
          </th>
        </tr>
      </tfoot>
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
