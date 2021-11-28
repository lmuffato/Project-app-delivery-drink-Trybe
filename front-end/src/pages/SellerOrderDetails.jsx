import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import SalesOrderList from '../components/SalesOrderList';

export default function SellerOrderDetails() {
  console.log('SELLER ORDER DETAILS ON!!!!');
  const buttonsList = [
    { name: 'MEUS PEDIDOS',
      value: 'orders',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];
  const url = 'http://localhost:3001';
  const [order, setOrder] = useState();
  const history = useHistory();
  const location = history.location.pathname.split('/');
  const orderId = location[location.length - 1];
  const toSlice = -4;
  const newOrderId = `000${orderId}`.slice(toSlice);
  const newPrice = order.total_price.split('.').join(',');
  const status = 'seller_order_details__element-order-details-label-delivery-status';
  const sttTotal = 'seller_order_details__element-order-total-price';
  const { username, token } = JSON.parse(localStorage.getItem('user'));
  let day;
  let month;
  let year;
  const getOrder = useCallback(
    async () => {
      await axios({
        method: 'get',
        url: `${url}/sales/${orderId}`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          setOrder(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }, [orderId, token],
  );

  if (order) {
    console.log(order);
    console.log('SELLER ORDER DETAILS ON!!!!');

    const dateArr = order.sale_date.split('-');
    const [year2, month2, dayArr] = dateArr;
    const arr2 = dayArr.split('T');
    const [arr3] = arr2;
    day = arr3;
    year = year2;
    month = month2;
  }

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  if (order) {
    return (
      <>
        <NavBar buttonsList={ buttonsList } clientName={ username } />
        <h3 className="mt-16">Detalhe do Pedido</h3>
        <div className="w-full flex flex-wrap p-5">
          <div className="w-full flex flex-wrap p-5 space-x-5">
            <p data-testid="seller_order_details__element-order-details-label-order-id">
              {`PEDIDO ${newOrderId}`}
            </p>
            <p data-testid="seller_order_details__element-order-details-label-order-date">
              { `${day}/${month}/${year}`}
            </p>
            <p className={ status }>
              { order.status }
            </p>
            <button
              type="button"
              data-testid="seller_order_details__button-preparing-check"
            >
              PREPARAR PEDIDO
            </button>
            <button
              type="button"
              data-testid="seller_order_details__button-dispatch-check"
            >
              SAIU PARA ENTREGA
            </button>
          </div>
          <SalesOrderList products={ order.products } />
        </div>
        <p data-testid={ sttTotal }>{`TOTAL: R$ ${newPrice}`}</p>
      </>
    );
  }
  return (<div>Loading...</div>);
}
