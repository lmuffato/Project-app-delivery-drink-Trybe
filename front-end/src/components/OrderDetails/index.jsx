import React from 'react';
import PropTypes from 'prop-types';
// import formatDate from '../../utils/formatDate';
import styles from './styles.module.css';

export default function OrderDetails({ saleData, products, quantity }) {
  console.log('SALEDATA =>', saleData);
  console.log('PRODUCTS =>', products);
  console.log('QUANTITY =>', quantity);
  const test = products.map((item, i) => ({ ...item, ...quantity[i] }));
  console.log('PRODUCTS COM QUANTITY =>', test);
  // const thInfos = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

  return (
    <main className={ styles.container }>
      <h3>Detalhes do Pedido</h3>
      {/* <section>
        <div>
          <span>
            {saleData.id}
          </span>
          <span>
            Vendedor:
            {saleData.seller.name}
          </span>
          <span>
            {formatDate(saleData.saleDate)}
          </span>
          <span>
            status
          </span>
          <button type="button">
            marcar como entregue;
          </button>
        </div>
        <table>
          <thead>
            <tr>
              {thInfos.map((info, index) => <th key={ `${info}${index}` }>{info}</th>)}
            </tr>
          </thead>
        </table>
      </section> */}
    </main>
  );
}

OrderDetails.propTypes = {
  saleData: PropTypes.object,
}.isRequired;
