import React, { useState, useEffect } from 'react';
import { saleActionGetById } from '../utils/API/fetch';

export default function CustomerOrdersDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  console.log('🚀 ~ f', orderDetails);

  const id = 1;

  useEffect(() => {
    (async () => {
      const result = await saleActionGetById(id);
      setOrderDetails(result);
    })();
  }, []);

  return (
    <div style={ { margin: 30 } }>
      DETAILS
    </div>
  );
}
