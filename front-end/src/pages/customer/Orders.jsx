import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { formatMoney } from 'accounting';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

export default function Orders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/sales', {
        headers: {
          authorization: user.token,
        },
      });
      const sales = response.data;
      const userOrders = sales.filter((sale) => sale.userId === user.id);
      setOrders(userOrders);
    })();
  }, [user]);

  return (
    <>
      { orders.map((order) => {
        const idLength = 4;
        return (
          <div key={ order.id }>
            <section data-testid={ `customer_orders__element-order-id-${order.id}` }>
              {`Pedido ${String(order.id).padStart(idLength, '0')}`}
            </section>
            <section
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
            >
              {order.status}
            </section>
            <section>
              <div data-testid={ `customer_orders__element-order-date-${order.id}` }>
                {dayjs(order.saleDate).format('DD/MM/YYYY')}
              </div>
              <div data-testid={ `customer_orders__element-card-price-${order.id}` }>
                {formatMoney(order.totalPrice, { symbol: '', decimal: ',' })}
              </div>
            </section>
          </div>
        );
      }) }
    </>
  );
}
