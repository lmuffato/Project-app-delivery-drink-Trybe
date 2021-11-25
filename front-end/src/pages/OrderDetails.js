import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // const saleId = 'item.products.saleProduct.saleId';

  useEffect(() => {
    const getOrder = async () => {
      const data = await fetch(`http://localhost:3001/orderDetails/${id}`);
      const result = await data.json();
      console.log(result);
      setOrders([result]);
      setIsLoading(false);
    };
    getOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? 'Loading' : orders.map((item, index) => (
        <div
          key={ index }
        >
          <div>
            <h4>
              Pedido
            </h4>
            <h4
              data-testid="customer_order_details__
              element-order-details-label-order-id"
            >
              { item.id }
            </h4>
            <p
              data-testid="customer_order_details__
              element-order-details-label-seller-name"
            >
              P. Vend:
              {' '}
              { item.seller.name }
            </p>
            <h4
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              { item.sale_date }
            </h4>
            <div
              readOnly
              className={ item.status }
              data-testid="customer_order_details__
              element-order-details-label-delivery-status"
            >
              { item.status }
            </div>
            <button
              type="button"
              data-testid="customer_order_details__button-delivery-check"
            >
              MARCAR COMO ENTREGUE
            </button>
            {item.products.map((product, i) => (
              <div
                key={ id }
              >
                <p
                  data-testid={ `customer_order_details__
                  element-order-table-item-number-${i}` }
                >
                  {i + 1}
                </p>
                <p
                  data-testid={ `customer_order_
                  details__element-order-table-name-${i}` }
                >
                  {product.name }
                </p>
                <p
                  data-testid={ `customer_order_details__
                  element-order-table-quantity-${id}` }
                >
                  {product.saleProduct.quantity }
                </p>
                <p
                  data-testid={ `customer_order_details__
                element-order-details-label-order-${id}` }
                >
                  {product.price }
                </p>
                <p
                  data-testid={ `customer_order_details__
                  element-order-table-sub-total-${id}` }
                >
                  {product.saleProduct.quantity * product.price}
                </p>
              </div>
            ))}
            <h4
              data-testid={ `customer_order_details__
              element-order-total-price-${id}` }
            >
              { item.price }
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;
