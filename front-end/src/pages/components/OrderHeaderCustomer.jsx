import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleUpdate from '../../services/fetchSaleUpdate';

export default function OrderHeaderCustomer({ sale }) {
  const { user } = useContext(ContextDeliveryApp);
  const [status, setStatus] = useState(sale.status);

  const handleClick = async (e) => {
    const updateSale = sale;
    updateSale.status = e.target.value;
    const { token } = user;
    await fetchSaleUpdate(token, updateSale);
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(sale.status);
    console.log(sale.status);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

  }, [sale]);
  console.log(status);
  console.log('sale', sale);
  return (
    <div>
      { sale ? (
        <div key={ sale.id }>
          <p>PEDIDO</p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {sale.id}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${sale.selledId}`}
          </p>
          <p data-testid="customer_order_details__element-order-details-label-order-date">
            {moment(sale.sale_date).format('DD/MM/YYYY')}
          </p>
          <p
            data-testid="customer_order_details__element-
          order-details-label-delivery-status"
          >
            { status || sale.status }
          </p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ status !== 'Entregue' }
            value="Preparando"
            onClick={ handleClick }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      )
        : '' }
    </div>
  );
}

OrderHeaderCustomer.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sale_date: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
    selledId: PropTypes.string.isRequired,
  }).isRequired,
};
