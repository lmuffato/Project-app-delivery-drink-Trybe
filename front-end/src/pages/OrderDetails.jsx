import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Context from '../context/Context';

const DATA_TEST_ID = 'customer_order_details__element-order-details-label-order-id';
const DATA_TEST_N = 'customer_order_details__element-order-details-label-seller-name';
const DATA_B = 'customer_order_details__button-delivery-check';
const DATA_TEST_DA = 'customer_order_details__element-order-details-label-order-date';
const DATA_S = 'customer_order_details__element-order-details-label-delivery-status';
const DATA_ITEM_N = 'customer_order_details__element-order-table-item-number-';
const DATA_ITEM_D = 'customer_order_details__element-order-table-name-';
const DATA_ITEM_Q = 'customer_order_details__element-order-table-quantity-';
const DATA_ITEM_P = 'customer_order_details__element-order-table-sub-total-';
const DATA_ITEM_TP = 'customer_order_details__element-order-total-price-';

function OrderDetails() {
  const { get, products } = useContext(Context);
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

  console.log(currProducts);
  if (!order) return (<div>Loading...</div>);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th data-testid={ DATA_TEST_ID }>{order.id}</th>
            <th data-testid={ DATA_TEST_N }>{order.sellerId}</th>
            <th data-testid={ DATA_TEST_DA }>
              {order.saleDate.split('T')[0].split('-').reverse().join('/')}
            </th>
            <th data-testid={ DATA_S }>{order.status}</th>
            <button type="button" data-testid={ DATA_B }>Marcar como entrege</button>
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
          {currProducts && currProducts.map((product, index) => (
            <tr key={ product.productId.name }>
              <td
                data-testid={ `${DATA_ITEM_N}${index}` }
              >
                {index + 1}
              </td>
              <td data-testid={ `${DATA_ITEM_D}${product.saleId}` }>
                {product.productId.name}
              </td>
              <td data-testid={ `${DATA_ITEM_Q}${product.saleId}` }>
                {product.quantity}
              </td>
              <td data-testid={ `${DATA_ITEM_P}${product.saleId}` }>
                {product.price}
              </td>
              <td
                data-testid={ `${DATA_ITEM_TP}${order.id}` }
              >
                {Number(product.quantity) * Number(product.productId.price) }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>{order.totalPrice}</h1>

    </div>
  );
}

export default OrderDetails;
