import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import DetailHeader from '../components/DetailHeader';
import dateFormat from '../services/dateFormat';
import DetailsCard from '../components/DetailsCard';

function SellerOrderDetails({ match: { params: { id } } }) {
  const { sales } = useContext(ApiContext);

  const colunas = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitário',
    'Sub-Total',
  ];

  return (!sales.length > 0 ? 'Loading...' : (
    <div>
      Detalhes do Pedido
      <div>
        <DetailHeader
          id={ id }
          sellerName={ sales[id - 1].seller_name }
          date={ dateFormat(sales[id - 1].sale_date) }
          status={ sales[id - 1].status }
          role={ JSON.parse(localStorage.getItem('user')).role }
        />
        <table>
          <thead>
            <tr>
              { colunas.map((coluna, index) => (
                <th key={ index }>
                  { coluna }
                </th>
              )) }
            </tr>
          </thead>
          <tbody>
            {sales[id - 1].products.map((product, index) => (
              <DetailsCard
                role={ JSON.parse(localStorage.getItem('user')).role }
                key={ index }
                index={ index }
                name={ product.name }
                qtty={ product.SaleProduct.quantity }
                price={ product.price }
                total={ Number(product.SaleProduct.quantity) * Number(product.price) }
              />
            ))}
          </tbody>
        </table>
        <div
          data-testid="seller_order_details__element-order-total-price"
        >
          { `Total: R$ ${sales[id - 1].total_price.replace('.', ',')}` }
        </div>
      </div>
    </div>
  ));
}

SellerOrderDetails.propTypes = ({
  match: {
    params: {
      id: PropTypes.number,
    },
  },
}).isRequired;

export default SellerOrderDetails;
