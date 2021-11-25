import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getOrder = async () => {
      const data = await fetch(`http://localhost:3001/orderDetails/${id}`);
      const result = await data.json();
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
              data-testid={ `customer_products__element-order-date-${item.id}` }
            >
              { item.index + 1 }
            </h4>
            <p>
              P. Vend:
              {' '}
              { item.name }
            </p>
            <h4>
              { item.sale_date }
            </h4>
            <div
              readOnly
              className={ item.status }
            >
              { item.status }
            </div>
            <button
              type="button"
            >
              MARCAR COMO ENTREGUE
            </button>
            <h4>
              { item.total_price }
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;
