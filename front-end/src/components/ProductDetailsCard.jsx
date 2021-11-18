import React, { useContext } from 'react';
import { arrayOf, objectOf, string } from 'prop-types';
import ProductItem from './ProductItem';
import Context from '../context/Context';

function ProductDetailsCard(props) {
  const { user } = useContext(Context);
  const { id, date, status, items, total, seller } = props;
  const { role } = user;

  return (
    <div>
      <div>
        <span>
          Pedido
          {' '}
          { id }
        </span>
        { role === 'customer' && (
          <span>
            P.Vend:
            {' '}
            { seller }
          </span>
        ) }
        <span>{ date }</span>
        <span>{ status }</span>
        { role === 'seller' && (
          <>
            <button
              type="button"
            >
              PREPARAR PEDIDO
            </button>
            <button type="button">SAIU PARA ENTREGA</button>
          </>
        ) }
        { role === 'customer' && (
          <button type="button">MARCAR COMO ENTREGUE</button>
        ) }
      </div>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
        </tr>
        { items.map((item) => <ProductItem key={ `item-${item.id}` } />) }
      </table>
      <div>{ total }</div>
    </div>
  );
}

ProductDetailsCard.propTypes = {
  id: string,
  date: string,
  status: string,
  items: arrayOf(objectOf(string)),
  total: string,
}.isRequired;

export default ProductDetailsCard;
