import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BodySeller() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/sales')
      .then(({ data }) => setSales(data))
      .catch(() => console.log('deu ruim'));
  }, []);
  console.log(sales);
  if (!sales) return <p>loading ...</p>;
  return (
    <p>olá, mundo</p>
    // <div>
    //   {
    //     sales.map((sale, index) => (
    //       <div
    //         key={ index }
    //       >
    //         <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>
    //           Pedido:
    //           {' '}
    //           { sale.id }
    //         </p>
    //         <p data-testid={ `seller_orders__element-delivery-status-${sale.id}` }>
    //           { sale.status }
    //         </p>
    //         <p data-testid={ `seller_orders__element-order-date-${sale.id}` }>
    //           { sale.saleDate }
    //         </p>
    //         <p data-testid={ `seller_orders__element-card-price-${sale.id}` }>
    //           { sale.totalPrice }
    //         </p>
    //         <p data-testid={ `seller_orders__element-card-address-${sale.id}` }>
    //           { sale.deliveryAddress }
    //         </p>
    //       </div>
    //     ))
    //   }
    // </div>
  );
}
