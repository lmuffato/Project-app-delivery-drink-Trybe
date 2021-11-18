import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import React from 'react';
import DeliveryContext from '../context/DeliveryContext';

function meusPedidosCliente() {
  const { orders, setOrders } = useContext(DeliveryContext);
  const { isLoading, setIsLoading } = useState(true);

  useEffect (() => {
    const getOrders = async () => {
      setOrders = await axios.get(`/customer/orders/${id}`);
      setIsLoading = false;
    },
    []
  });

  return (
    <>

        // {isLoading ? <Loading /> : orders.map((item, index) => (
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
            value={ item.status }
          />
          <div>
            <h4>
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

export default meusPedidosCliente;
