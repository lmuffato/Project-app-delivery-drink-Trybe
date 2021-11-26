import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import { getSaleBySellerId } from '../utils/Data';
import dateFormatation from '../utils/Format';

const LINKS = [
  {
    name: 'PEDIDOS',
    url: '/customer/orders',
    testId: 'customer_products__element-navbar-link-orders',
  },
];

export default function SellerOrders() {
  const history = useHistory();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const renderSales = async () => {
      const token = localStorage.getItem('token');
      const result = await getSaleBySellerId(token);
      setOrders(result);
    };
    renderSales();
    console.log(orders);
  }, []);

  return (
    <div>
      <Header links={ LINKS } />
      {!orders ? 'Loading' : orders.map((item, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `seller_orders__element-order-id-${item.id}` }
          onClick={ () => history.push(`/seller/orders/${item.id}`) }
        >
          <div>
            <h5>
              Pedido
            </h5>
            <h3
              data-testid={ `seller_orders__element-order-id-${item.id}` }
            >
              { index + 1 }
            </h3>
          </div>
          <div
            className={ item.status }
            data-testid={ `seller_orders__element-delivery-status-${item.id}` }
          >
            { item.status }
          </div>
          <div>
            <h4
              data-testid={ `seller_orders__element-order-date-${item.id}` }
            >
              { dateFormatation(item.sale_date) }
            </h4>
            <h4
              data-testid={ `seller_orders__element-card-price-${item.id}` }
            >
              {`R$ ${item.totalPrice.replace('.', ',')}`}
            </h4>
          </div>
          <p
            data-testid={ `seller_orders__element-card-address-${item.id}` }
          >
            { `${item.deliveryAddress}, ${item.deliveryNumber}` }
          </p>
        </button>
      ))}
    </div>
  );
}
