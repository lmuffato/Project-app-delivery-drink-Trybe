import React, { useContext } from 'react';
import SellerOrderCard from '../components/SellerOrderCard';
import ApiContext from '../context/ApiContext';
import dateFormat from '../services/dateFormat';

function SellerOrders() {
  const { sales } = useContext(ApiContext);

  return (
    <div>
      { sales.map((sale, index) => (
        <SellerOrderCard
          key={ index }
          id={ sale.id }
          status={ sale.status }
          totalPrice={ sale.total_price }
          saleDate={ dateFormat(sale.sale_date) }
          deliveryAddress={ sale.delivery_address }
          deliveryNumber={ sale.delivery_number }
        />
      )) }
    </div>
  );
}

export default SellerOrders;
