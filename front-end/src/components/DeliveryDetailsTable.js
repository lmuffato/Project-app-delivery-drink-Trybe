import React from 'react';
import PropTypes from 'prop-types';
import SellerSelect from './SellerSelect';

export default function DeliveryDetailsTable({ handleChange, sellers }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Vendedora</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <SellerSelect handleChange={ handleChange } sellers={ sellers } />
          </td>
          <td>
            <input
              name="delivery_address"
              data-testid="customer_checkout__input-address"
              onChange={ handleChange }
            />
          </td>
          <td>
            <input
              name="delivery_number"
              data-testid="customer_checkout__input-addressNumber"
              onChange={ handleChange }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

DeliveryDetailsTable.propTypes = {
  handleChange: PropTypes.func,
  sellers: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
