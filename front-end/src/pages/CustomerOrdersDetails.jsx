import React, { useState, useEffect } from 'react';
import { saleActionGet } from '../utils/API/fetch';

export default function CustomerOrdersDetails() {
  const [orderDetails, setOrderDetails] = useState([])
  console.log('🚀', orderDetails);

  useEffect(() => {
    (async () => {
      const { result } = await saleActionGetById(id);
      setOrderDetails(result);
    })();
  }, [token]);

  return (
    <div style={ { margin: 30 } }>
      DETAILS
    </div>
  );
}
