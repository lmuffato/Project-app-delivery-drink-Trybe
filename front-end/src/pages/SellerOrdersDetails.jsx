import React, { useState, useEffect } from 'react';

import { getSalesDetails } from '../services/endpointsAPI';

export default function SellerOrdersDetails() {
  const id = window.location.href.split('/')[5];
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadingTag = <h3>Loading ...</h3>;

  useEffect(() => {
    setIsLoading(true);
    getSalesDetails(id)
      .then((result) => setOrder(result));
    setIsLoading(false);
  }, []);

  const renderAlgo = () => {
    console.log(order);
    return (
      <h2>tem algo</h2>
    );
  }

  return (
    <main>
      <h4>Página de detalhes</h4>
      {
        isLoading
        ? loadingTag
        : renderAlgo()
      }
    </main>
  );
}
