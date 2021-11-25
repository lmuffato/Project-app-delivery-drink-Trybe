import React, { useContext, useState, useEffect } from 'react';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSellerSale from '../../services/fetchSellerSales';
import SaleCard from './SaleCard';

export default function OrdersList() {
  const { user } = useContext(ContextDeliveryApp);
  const [sales, setSales] = useState([]);
  const getSales = async () => {
    const { token, id } = user;
    const sellerId = id;
    const salesBySeller = await fetchSellerSale(token, sellerId);
    setSales(salesBySeller.data.sellerSales);
  };

  useEffect(() => {
    getSales();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { sales ? sales.map((sale) => (<SaleCard key={ sale.id } sale={ sale } />)) : '' }
    </div>
  );
}
