import React, { useContext } from 'react';
import OrderCard from '../components/OrderCard';
import ApiContext from '../context/ApiContext';
import dateFormat from '../services/dateFormat';

function CustomerOrders() {
  const { sales } = useContext(ApiContext);

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
