import { string } from 'prop-types';
import React from 'react';

function ProductItem(props) {
  const { id, name, quantity, unitPrice, subTotal } = props;

  return (
    <div>
      <tr>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ quantity }</td>
        <td>{ unitPrice }</td>
        <td>{ subTotal }</td>
      </tr>
    </div>
  );
}

ProductItem.propTypes = {
  id: string,
  name: string,
  quantity: string,
  unitPrice: string,
  subTotal: string,
}.isRequired;

export default ProductItem;
