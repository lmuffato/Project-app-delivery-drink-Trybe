import React, { useState, useEffect } from 'react';
import { getSales } from '../utils/Data';
// import { getSales } from '../utils/Data';

function orders() {
  const { isLoading, setIsLoading } = useState(true);
  const { orders, setOrders} = useState('');

  useEffect(() => {
    return async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      const result = await getSales(token);
      console.log(result);
      setOrders(result);
      setIsLoading(false);
    }
  }, [])
  return (
    <>
        {isLoading ? 'Loading' : orders.map((item, index) => (
        <button
          type="button"
          key={ index }
        >
          <div>
            <h5>
              Pedido
            </h5>
            <h3
              data-testid={ `customer_products__element-order-date-${item.id}` }
            >
              { item.index + 1 }
            </h3>
          </div>
          <input
            readOnly= 'true'
            className={ item.status }
            data-testid={ `customer_orders__element-delivery-status-${item.id}`}
            value={ item.status }
          />
          <div>
            <h4
            data-testid={ `customer_orders__element-order-date-${item.id}`}
            >
              { item.sale_date }
            </h4>
            <h4>
              { item.total_price }
            </h4>
          </div>
        </button>
      ))}
    </>
  );
}

export default orders;
