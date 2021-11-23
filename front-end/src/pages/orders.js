import React, { useState, useEffect } from 'react';
import { getSales } from '../utils/Data';
// import { getSales } from '../utils/Data';
import Header from '../Components/Header';

function Orders() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const dateFormatation = (data) => {
    const dois = 2;
    const quatro = 4;
    const YMD = data.split('T')[0];
    const i = YMD.split('-');
    const [y, m, d] = i;
    const DMY = `${d}/${m}/${y.slice(dois, quatro)}`;
    return DMY;
  };

  const LINKS = [
    {
      name: 'PRODUTOS',
      url: '/customer/products',
      testId: 'customer_products__element-navbar-link-products',
    },
    {
      name: 'MEUS PEDIDOS',
      url: '/customer/orders',
      testId: 'customer_products__element-navbar-link-orders',
    },
  ];

  useEffect(() => {
    const teste = async () => {
      const token = localStorage.getItem('token');
      const result = await getSales(token);
      setOrders(result);
      setIsLoading(false);
    };
    teste();
  }, []);
  return (
    <div>
      <Header links={ LINKS } />
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
              { index + 1 }
            </h3>
          </div>
          <input
            readOnly="true"
            className={ item.status }
            data-testid={ `customer_orders__element-delivery-status-${item.id}` }
            value={ item.status }
          />
          <div>
            <h4
              data-testid={ `customer_orders__element-order-date-${item.id}` }
            >
              { dateFormatation(item.sale_date) }
            </h4>
            <h4>
              {`R$ ${item.totalPrice.replace('.', ',')}`}
            </h4>
          </div>
        </button>
      ))}
    </div>
  );
}

export default Orders;
