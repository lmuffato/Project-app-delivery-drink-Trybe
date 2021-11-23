import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import DetailHeader from '../components/DetailHeader';
import dateFormat from '../services/dateFormat';

function OrderDetails({ match: { params: { id } } }) {
  const { sales } = useContext(ApiContext);

  return (!sales.length > 0 ? 'Loading...' : (
    <div>
      Detalhes do Pedido
      <div>
        <DetailHeader
          id={ id }
          sellerName={ sales[id - 1].seller_name }
          date={ dateFormat(sales[id - 1].sale_date) }
          status={ sales[id - 1].status }
        />
      </div>
      { console.log(id, sales[id - 1]) }
    </div>
  ));
}

OrderDetails.propTypes = ({
  match: {
    params: {
      id: PropTypes.number,
    },
  },
}).isRequired;

export default OrderDetails;
