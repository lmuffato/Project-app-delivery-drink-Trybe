import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import DetailHeader from '../components/DetailHeader';
import dateFormat from '../services/dateFormat';
import DetailsCard from '../components/DetailsCard';

function OrderDetails({ match: { params: { id } } }) {
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
            {/* {console.log('aquiiiii', sales[id - 1].products)} */}
            {sales[id - 1].products.map((product, index) => (
              <DetailsCard
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
        <button
          type="button"
          data-testid="customer_order_details__element-order-total-price"
        >
          { `Total: R$ ${sales[id - 1].total_price.replace('.', ',')}` }
        </button>
      </div>
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
