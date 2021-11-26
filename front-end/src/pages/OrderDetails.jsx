/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Context from '../context/Context';

const DATA_TEST_ID = 'customer_order_details__element-order-details-label-order-id';
const DATA_TEST_N = 'customer_order_details__element-order-details-label-seller-name';
const DATA_TEST_DA = 'customer_order_details__element-order-details-label-order-date';
const DATA_S = 'customer_order_details__element-order-details-label-delivery-status';
const DATA_ITEM_N = 'customer_order_details__element-order-table-item-number-';
const DATA_ITEM_D = 'customer_order_details__element-order-table-name-';
const DATA_ITEM_Q = 'customer_order_details__element-order-table-quantity-';
const DATA_ITEM_P = 'customer_order_details__element-order-table-sub-total-';
const DATA_ITEM_TP = 'customer_order_details__element-order-total-price-';

function OrderDetails() {
  const { get, products, total } = useContext(Context);
  const id = useLocation().pathname.split('/');
  const { length } = id;
  const [order, setOrder] = useState();
  const [currProducts, setProducts] = useState();

  useEffect(() => {
    const getOrders = async () => {
      const { data: { saleDetail, seller } } = await
      get('customer_checkout', id[length - 1]);

      saleDetail.sellerId = seller.name;

      setOrder(saleDetail);

      const { data } = await
      get('customer_orders', id[length - 1]);

      data.forEach(async (item) => {
        item.productId = await
        (products.find((itemId) => (item.productId === itemId.id)));
      });

      setProducts(data);
    };
    getOrders();
  }, []);

  console.log(order);

  return (
    <div>
      Detalhes do Pedido
      {
        order
        && <>
          <table>
            <thead>
              <tr>
                <th data-testid={ DATA_TEST_ID }>{order.id}</th>
                <th data-testid={ DATA_TEST_N }>{order.sellerId}</th>
                <th data-testid={ DATA_TEST_DA }>
                  {order.saleDate.split('T')[0].split('-').reverse().join('/')}
                </th>
                <th data-testid={ DATA_S }>{order.status}</th>
                <th>Marcar como entrege</th>
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
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {currProducts && currProducts.map((product, index) => (
                  <>
                    <td
                      data-testid={ `${DATA_ITEM_N}${index}` }
                      key={ product.productId.name }
                    >
                      {index + 1}
                    </td>
                    <td data-testid={ `${DATA_ITEM_D}${index}` }>
                      {product.productId.name}
                    </td>
                    <td data-testid={ `${DATA_ITEM_Q}${index}` }>{product.quantity}</td>
                    <td data-testid={ `${DATA_ITEM_P}${index}` }>
                      {product.productId.price}
                    </td>
                    <td data-testid={ `${DATA_ITEM_TP}${index}` }>{order.totalPrice}</td>
                  </>
                ))}
              </tr>
            </tbody>
          </table>
          <h1>{total}</h1>
        </>
      }

    </div>
  );
}

export default OrderDetails;
