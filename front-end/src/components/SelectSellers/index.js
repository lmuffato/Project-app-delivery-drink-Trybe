import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SelectSellers({ sellers, selectedSeller, setSelectedSeller }) {
  return (
    <label htmlFor="seller">
      P. Vendedora Responsável
      <select
        name="seller"
        id="seller"
        required
        value={ selectedSeller }
        onChange={ ({ target }) => setSelectedSeller(target.value) }
        data-testid="customer_checkout__select-seller"
        className="selectSeller"
      >
        {sellers.map(({ id, name }) => (
          <option value={ id } key={ id }>{name}</option>
        ))}
      </select>
    </label>
  );
}

SelectSellers.propTypes = {
  sellers: PropTypes.string.isRequired,
  selectedSeller: PropTypes.string.isRequired,
  setSelectedSeller: PropTypes.func.isRequired,
};

export default SelectSellers;
