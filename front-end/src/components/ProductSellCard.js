import React from 'react';

const ProductSellCard = ({ product, index }) => {
  return (
    <>
      <tr>
        <td>{ index }</td>
        <td>{ product.name }</td>
        <td>{ product.quantity }</td>
        <td>{ product.unitPrice }</td>
        <td>{ product.subTotal }</td>
      </tr>
      <button>Remover Item</button>
    </>
  );
};

ProductSellCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.string,
    unitPrice: PropTypes.string,
    subTotal: PropTypes.string,
  }).isRequired,
  index: PropTypes.shape({}),
}.isRequired;

export default ProductSellCard;