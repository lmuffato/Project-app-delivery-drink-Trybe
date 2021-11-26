import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ContextDeliveryApp from '../../store/ContextDeliveryApp';
import fetchSaleUpdate from '../../services/fetchSaleUpdate';
import fetchCustomerSales from '../../services/fetchCustomerSales';
import fetchGetUser from '../../services/fetchGetUser';
// import fetchSellers from '../../services/fetchSellers';

export default function OrderHeaderCustomer({ sale }) {
  const { user } = useContext(ContextDeliveryApp);
  const [status, setStatus] = useState(sale.status);
  const [sellerUser, setSellerUser] = useState('');

  const handleClick = async (e) => {
    const updateSale = sale;
    updateSale.status = e.target.value;
    const { token } = user;
    await fetchSaleUpdate(token, updateSale);
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  const getSeller = async () => {
    const { token, id: sellerId } = user;

    const usersAll = await fetchGetUser(token);

    const salesBySeller = await fetchCustomerSales(token, sellerId);
    //  console.log(salesBySeller.data);
    const listSellers = salesBySeller.data.customerSales.find((eleme) => {
      console.log(eleme.sellerId.toString());
      return eleme.sellerId.toString();
    });
    console.log(listSellers.sellerId);
    console.log(usersAll.users.find(({ id }) => id === listSellers.sellerId).name);
    setSellerUser(usersAll.users.find(({ id }) => id === listSellers.sellerId).name);
  };

  useEffect(() => {
    getSeller();
    setStatus(sale.status);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

  }, [sale]);
  //  console.log(sale.status);
  // console.log('sale', sale);
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
            {`P. Vend: ${sellerUser}`}
          </p>
          <p data-testid="customer_order_details__element-order-details-label-order-date">
            {moment(sale.sale_date).format('DD/MM/YYYY')}
          </p>
          <p
            data-testid="customer_order_details__element
            -order-details-label-delivery-status"
          >
            { status || sale.status }
          </p>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ status !== 'Em Trânsito' && sale.status !== 'Em Trânsito' }
            value="Entregue"
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
  sale: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  //  sellerId: PropTypes.string.isRequired,
  sale_date: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
  //  name: PropTypes.string.isRequired,

};
