import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function meusPedidosCliente (){
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
    <nada></nada>
      {/* {isLoading ? <Loading /> : orders.map((item, index) => (
        <button
          type="button"
          key={ index }
        >
          <div>
            <h5>
              Pedido
            </h5>
            <h3
              data-testid={ `customer_products__element-order-date-${id}` }
            >
              { index + 1 }
            </h3>
          </div>
          <input
            readOnly={ true }
            className={ status: orderStatus }
          >
            { status: orderStatus }
          </input>
          <div>
            <h4>
              { sale_date }
            </h4>
            <h4>
              { total_price }
            </h4>
          </div>
        </button>
      ))} */}
    </>
  );
}

export default meusPedidosCliente;
