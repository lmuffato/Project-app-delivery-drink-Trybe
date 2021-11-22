import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import ApiContext from '../context/ApiContext';

function CustomerOrders() {
  const { sales } = useContext(ApiContext);

  const dateFormat = (date) => {
    const num10 = 10;
    const num8 = 8;
    const num5 = 5;
    const num4 = 4;
    date = date.substr(0, num10);

    const day = date.substr(num8, 2);
    const month = date.substr(num5, 2);
    const year = date.substr(0, num4);

    const newDate = `${day}/${month}/${year}`;
    return newDate;
  };

  return (
    <div>
      { sales.map((sale, index) => (
        <OrderCard
          key={ index }
          id={ sale.id }
          status={ sale.status }
          totalPrice={ sale.total_price }
          saleDate={ dateFormat(sale.sale_date) }
        />
      )) }
    </div>
  );
}

export default CustomerOrders;
