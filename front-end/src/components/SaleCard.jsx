import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function SaleCard(props) {
  const { sale } = props;
  const toSlice = -4;
  const { id, status } = sale;
  const newOrderId = `000${id}`.slice(toSlice);
  const newPrice = sale.total_price.split('.').join(',');
  // console.log(sale);
  const history = useHistory();
  const showdate = (date) => {
    console.log(date);
    const dateArr = date.split('-');
    const [year, month, dayArr] = dateArr;
    const arr2 = dayArr.split('T');
    const [day] = arr2;
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="p-2 m-5 bg-gray-300">
      <button
        type="button"
        onClick={ () => history.push(`/seller/orders/${id}`) }
      >
        <div className="h-20 bg-white">
          <p>Pedido</p>
          <p
            data-testid={ `seller_orders__element-order-id-${id}` }
          >
            { newOrderId }
          </p>
        </div>
      </button>
      <div className="h-16">
        <p
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          { status }
        </p>
      </div>
      <div className="h-8">
        <p data-testid={ `seller_orders__element-order-date-${id}` }>
          { showdate(sale.sale_date) }
        </p>
      </div>
      <div className="h-8">
        <p data-testid={ `seller_orders__element-card-price-${id}` }>
          { `R$ ${newPrice}`}
        </p>
      </div>
      <div className="h-8">
        <p>
          { `Rua ${sale.delivery_address}, ${sale.delivery_number}`}
        </p>
      </div>
    </div>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
