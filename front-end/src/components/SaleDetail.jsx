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
  const sellerName = 'customer_order_details__element-order-details-label-seller-name';
  const status = 'customer_order_details__element-order-details-label-delivery-status';
  let day;
  let month;
  let year;

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

  if (sale) {
    const dateArr = sale.sale_date.split('-');
    const [year2, month2, dayArr] = dateArr;
    const arr2 = dayArr.split('T');
    const [arr3] = arr2;
    day = arr3;
    year = year2;
    month = month2;
  }

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
              data-testid={ sellerName }
            >
              {sale.seller.name}
            </p>
            <p
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              {`${day}/${month}/${year}`}
            </p>
            <p
              data-testid={ status }
            >
              {sale.status}
            </p>
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
              disabled
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
          <DetailTable products={ sale.products } token={ token } />
          <p
            data-testid="customer_order_details__element-order-total-price"
          >
            {sale.total_price.split('.').join(',')}
          </p>
        </div>
      </div>
    );
  }
  return (<div>Loading...</div>);
}

SaleDetail.propTypes = {
  token: PropTypes.string.isRequired,
};
