import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchSales } from '../utils/API/fetch';

export default function CustomerOrder() {
  const [sales, setSale] = useState([]);
  console.log('🚀 ~ file: CustomerOrders.jsx ~ line 7 ~ CustomerOrder ~ sales', sales);
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  //
  useEffect(() => {
    (async () => {
      const result = await fetchSales(token);
      console.log('🚀 ~ file: CustomerOrders.jsx ~ line 14 ~ result', result);
      setSale(result);
    })();
  }, [token]);

  return (
    <div>
      { sales.map((sale) => (
        <div key={ sale.id } style={ { margin: 20 } }>
          <h5>Pedido</h5>
          <p
            data-testid={ `customer_orders__element-order-id-${sale.id}` }
          >
            { sale.id }
          </p>
          <p
            data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
          >
            { sale.status }
          </p>
          <p
            data-testid={ `customer_orders__element-order-date-${sale.id}` }
          >
            { moment(sale.date).format('DD/MM/YYYY') }
          </p>
          <p
            data-testid={ `customer_orders__element-card-price-${sale.id}` }
          >
            { sale.price.replace('.', ',') }
          </p>
        </div>
      )) }
    </div>
  );
}
