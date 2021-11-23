import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleUpdate from '../../services/fetchSaleUpdate';

export default function OrderHeader({ sale }) {
  const { user } = useContext(ContextDeliveryApp);
  const [saleState, setSaleState] = useState({});
  const [status, setStatus] = useState('Pendente');
  const handleClick = async (e) => {
    const updateSale = sale;
    updateSale.status = e.target.value;
    const { token } = user;
    const response = await fetchSaleUpdate(token, updateSale);
    setSaleState(response);
    setStatus(e.target.value);
  };
  useEffect(() => {
    console.log('sale', sale);
    setSaleState(sale);
    setStatus(sale.status);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

  }, [sale]);

  return (
    <div>
      { saleState ? (
        <div key={ sale.id }>
          <p>PEDIDO</p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {saleState.id}
          </p>
          <p
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {moment(saleState.sale_date).format('DD/MM/YY')}
          </p>
          <p data-testid="seller_order_details__element-order-details-label-order-date">
            PENDENTE
          </p>
          <button
            type="button"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ status !== 'Pendente' }
            value="Preparando"
            onClick={ handleClick }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ status !== 'Preparando' }
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
