import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleUpdate from '../../services/fetchSaleUpdate';

export default function OrderHeader({ sale }) {
  const { user } = useContext(ContextDeliveryApp);
  const [status, setStatus] = useState(sale.status);
  const DELVTESTID = 'seller_order_details__element-order-details-label-delivery-status';
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
  console.log(sale.status);
  console.log('sale', sale);
  return (
    <div>
      { sale ? (
        <div key={ sale.id }>
          <p>PEDIDO</p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {sale.id}
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {moment(sale.sale_date).format('DD/MM/YYYY')}
          </p>
          <p
            data-testid={ DELVTESTID }
          >
            { status || sale.status }
          </p>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ status !== 'Pendente' && sale.status !== 'Pendente' }
            value="Preparando"
            onClick={ handleClick }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ status !== 'Preparando' && sale.status !== 'Preparando' }
            value="Em Trânsito"
            onClick={ handleClick }
          >
            SAIU PARA ENTREGA
          </button>

        </div>
      )
        : '' }
    </div>
  );
}

OrderHeader.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sale_date: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
