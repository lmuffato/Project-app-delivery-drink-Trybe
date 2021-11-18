import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function detalhesPedidosClientes (){
  const { orders, setOrders } = useContext(DeliveryContext);
  const { isLoading, setIsLoading } = useState(true);

  useEffect (() => {
    const getOrder = async () => {
      setOrders = await axios.get(`/customer/orders/${idVenda}`);
      setIsLoading = false;
    },
    []
  });

  return (
    <>
      {isLoading ? <Loading /> : orders.map((item, index) => (
          <div>
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
                  P. Vend: { item.name }
              </p>
              <h4>
                { item.sale_date }
              </h4>
            <input
              readOnly={ true }
              className={ item.status }
            >
              { item.status }
            </input>
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
    </>
  );
}

export default detalhesPedidosClientes;
