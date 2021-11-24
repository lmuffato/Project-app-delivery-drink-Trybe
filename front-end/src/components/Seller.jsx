import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BodySeller() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then(({ data }) => setSales(data))
      .catch(() => console.log('deu ruim'));
  }, []);

  if (!sales) return <p>loading ...</p>;
  return (
    <section text="white">
      {
        sales.map(({ id, status, saleDate, totalPrice, deliveryAddress }) => (
          <div key={ id }>
            <div data-testid={ `seller_orders__element-order-id-${id}` }>
              Pedido:
              {' '}
              { id }
            </div>
            <div data-testid={ `seller_orders__element-delivery-status-${id}` }>
              { status }
            </div>
            <div>
              <span data-testid={ `seller_orders__element-order-date-${id}` }>
                { saleDate }
              </span>
              <span data-testid={ `seller_orders__element-card-price-${id}` }>
                { totalPrice }
              </span>
            </div>
            <span data-testid={ `seller_orders__element-card-address-${id}` }>
              { deliveryAddress }
            </span>
          </div>
        ))
      }
    </section>
  );
}
