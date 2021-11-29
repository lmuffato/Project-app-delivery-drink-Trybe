import React from 'react';
import PropTypes from 'prop-types';

export default function SellerSelect({ sellers, handleChange }) {
  return (
    <select
      name="seller_id"
      data-testid="customer_checkout__select-seller"
      onChange={ handleChange }
    >
      <option hidden>Selecione o vendedor</option>
      {sellers.map((seller) => (
        <option key={ seller.id } value={ seller.id }>
          {seller.name}
        </option>
      ))}
    </select>
  );
}

SellerSelect.propTypes = {
  handleChange: PropTypes.func,
  sellers: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
