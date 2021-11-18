import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductDetailsCard from '../components/ProductDetailsCard';
import Context from '../context/Context';

function OrderDetails() {
  const { get } = useContext(Context);
  const { pathname } = useLocation();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    get('seller_orders', pathname.split('/').pop())
      .then((response) => setOrder(response));
  }, [get, pathname]);

  return (
    <div>
      Detalhes do Pedido
      { order ? (
        <ProductDetailsCard { ...order } />
      )
        : 'Loading'}
    </div>
  );
}

export default OrderDetails;
