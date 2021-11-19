import React, { useEffect, useState } from 'react';
import OrderCard from '../components/molecules/TempOrderCard';
import { fetchSales } from '../utils/API/fetch';

const mockToken = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.',
  'eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20',
  'iLCJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNjM3MzYyOTk0LCJleHAiOjE2Mzc0MDYxOTR9.',
  'WeOorUB2rft9hC75sFBsbSzeJWrjiLuVtVp8T5Cv3pM',
].join('');

function SellerOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const sales = await fetchSales(mockToken);
      setOrders(sales);
    })();
  }, []);
  return (
    <div>
      { orders.map((_o, i) => <OrderCard key={ i } { ...orders[i] } />) }
    </div>
  );
}

export default SellerOrders;
