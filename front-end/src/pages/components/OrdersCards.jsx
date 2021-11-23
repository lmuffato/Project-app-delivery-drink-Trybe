import React, { useContext, useEffect, useState } from 'react';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchCustomerSales from '../../services/fetchCustomerSales';
import OrderCard from './OrderCard';

export default function OrdersCards() {
  const { user } = useContext(ContextDeliveryApp);
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    /*
    setIsLoading(true);
    const salesList = await fetchSaleDone(user.token);
    const salesComplete = salesList.saleDone.map((sale) => sale);
    setSales(salesComplete);
    */

    const { token, id } = user;
    const userId = id;
    const salesByCustomer = await fetchCustomerSales(token, userId);
    console.log(salesByCustomer.data.customerSales);
    setSales(salesByCustomer.data.customerSales);
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <div>
      {
        sales ? sales
          .map((sale) => (
            <OrderCard
              key={ sale.id }
              sale={ sale }
            />)) : ''
      }
    </div>
  );
}
