import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router';
import DetailTable from './DetailTable';

export default function SaleDetail(props) {
  const { token } = props;
  const url = 'http://localhost:3001';
  const [sale, setSale] = useState();
  const history = useHistory();
  const location = history.location.pathname.split('/');
  const saleId = location[location.length - 1];

  const getSale = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/sales/${saleId}`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setSale(res.data);
        })
        .catch((err) => console.log(err));
    }, [setSale, token, saleId],
  );

  useEffect(() => {
    getSale();
  }, [getSale]);

  console.log(sale);
  if (sale) {
    return (
      <div className="w-full flex flex-wrap p-20">
        <h3>Detalhe do Pedido</h3>
        <div>
          <div>
            <p
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              {sale.id}
            </p>
            <p
              data-testid="customer_order_details__
              element-order-details-label-seller-name"
            >
              {sale.seller.name}
            </p>
            <p
              data-testid="customer_order_details__
              element-order-details-label-order-date"
            >
              {sale.sale_date}
            </p>
            <p
              data-testid="customer_order_details__
              element-order-details-label-delivery-status"
            >
              {sale.status}
            </p>
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <DetailTable products={ sale.products } token={ token } />
          <p>{sale.total_price}</p>
        </div>
      </div>
    );
  }
  return (<div>Loading...</div>);
}

SaleDetail.propTypes = {
  token: PropTypes.string.isRequired,
};
