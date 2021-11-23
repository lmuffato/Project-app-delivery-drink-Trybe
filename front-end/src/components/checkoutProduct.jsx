import React from 'react';
import PropTypes from 'prop-types';

export default function CheckoutProduct({ i, id, title, qtd, price }) {
  return (
    <div key={ id }>
      <p>{i + 1}</p>
      <p>{title}</p>
      <p>{qtd}</p>
      <p>{price}</p>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
