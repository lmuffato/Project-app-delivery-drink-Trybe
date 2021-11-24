import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { formatMoney } from 'accounting';
import dayjs from 'dayjs';
import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

export default function SaleDetails({ match }) {
  const [sale, setSale] = useState({});
  const [sellerName, setSellerName] = useState('');
  const [prepared, setPrepared] = useState(false);
  const [readyToDelivery, setReadyToDelivery] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const response = await api.get('/sales', {
        headers: {
          authorization: user.token,
        },
      });
      const sales = response.data;
      const foundSale = sales.find((item) => item.id === Number(match.params.id));
      setSale(foundSale);

      const userResponse = await api.get('/register', {
        headers: {
          authorization: user.token,
        },
      });
      const seller = userResponse.data.find(
        (register) => register.id === foundSale.sellerId,
      );
      setSellerName(seller.name);

      if (sale.status === 'Preparando') {
        setPrepared(true);
        setReadyToDelivery(true);
      }
    })();
  }, [match, user, sale]);
  const idLength = 4;
  const testIdAlias = 'seller_order_details__';
  const toDelivery = 'Em Trânsito';

  function checkPrepare() {
    api.put(`/sales/${sale.id}`, {
      status: 'Preparando',
    }, { headers: {
      authorization: user.token,
    } });
    setSale({
      ...sale,
      status: 'Preparando',
    });
    setReadyToDelivery(true);
    setPrepared(true);
  }

  function sendToDelivery() {
    api.put(`/sales/${sale.id}`, {
      status: toDelivery,
    }, { headers: {
      authorization: user.token,
    } });
    setSale({
      ...sale,
      status: toDelivery,
    });
  }

  return (
    <div style={ { paddingTop: '80px' } }>
      <h1>Detalhes do pedido</h1>
      <table>
        <thead>
          <tr>
            <th
              data-testid={ `${testIdAlias}element-order-details-label-order-id` }
            >
              { `Pedido ${String(sale.id).padStart(idLength, '0')}` }
            </th>
            <th
              data-testid={ `${testIdAlias}element-order-details-label-seller-name` }
            >
              { sellerName }
            </th>
            <th
              data-testid={ `${testIdAlias}element-order-details-label-order-date` }
            >
              { dayjs(sale.saleDate).format('DD/MM/YYYY') }
            </th>
            <th
              data-testid={ `${testIdAlias}element-order-details-label-delivery-status` }
            >
              { sale.status }
            </th>
          </tr>
          <tr>
            <th>
              Item
            </th>
            <th>
              Descrição
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor unitário
            </th>
            <th>
              Sub-total
            </th>
          </tr>
        </thead>
        <tbody>
          { (sale && sale.product) && sale.product.map((product) => (
            <>
              <tr key={ product.id }>
                <td
                  data-testid={
                    `${testIdAlias}element-order-table-item-number-${product.id}`
                  }
                >
                  {product.id}
                </td>
                <td
                  data-testid={
                    `${testIdAlias}element-order-table-name-${product.id}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `${testIdAlias}element-order-table-quantity-${product.id}`
                  }
                >
                  {product.SalesProduct.quantity}
                </td>
                <td
                  data-testid={
                    `${testIdAlias}element-order-total-price-${product.id}`
                  }
                >
                  {formatMoney(product.price, { symbol: '', decimal: ',' })}
                </td>
                <td
                  data-testid={
                    `${testIdAlias}element-order-table-sub-total-${product.id}`
                  }
                >
                  {
                    formatMoney(
                      Number(product.price * product.SalesProduct.quantity).toFixed(2),
                      { symbol: '', decimal: ',' },
                    )
                  }
                </td>
              </tr>
              <button
                type="button"
                data-testid={ `${testIdAlias}button-preparing-check` }
                onClick={ checkPrepare }
                disabled={ prepared }
              >
                Preparar pedido
              </button>
              <button
                type="button"
                data-testid={ `${testIdAlias}button-dispatch-check` }
                onClick={ sendToDelivery }
                disabled={ !readyToDelivery }
              >
                {toDelivery}
              </button>
            </>
          )) }
        </tbody>
      </table>
      <h1>
        Total:
        <span
          data-testid={
            `${testIdAlias}element-order-total-price`
          }
        >
          { formatMoney(sale.totalPrice, { symbol: '', decimal: ',' }) }
        </span>
      </h1>
    </div>
  );
}

SaleDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
