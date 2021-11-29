import React from 'react';
import PropTypes from 'prop-types';
import ProductSellCard from './ProductSellCard';

export default function CheckoutProductsTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {products && Object.values(products).map((product, index) => (
          <ProductSellCard key={ index } product={ product } index={ index } />
        ))}
      </tbody>
    </table>
  );
}

CheckoutProductsTable.propTypes = {
  products: PropTypes.shape({}),
}.isRequired;
