import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Select = ({ id, name, onChange, value, options, ...others }) => (
  <select
    id={ id }
    name={ name }
    value={ value }
    onChange={ onChange }
    { ...others }
    className="c_select"
  >
    {
      options.map((option, index) => (
        <option
          key={ `${option.name}_${index}` }
          value={ option.value }
        >
          { option.name }
        </option>))
    }
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(
    { name: PropTypes.string, value: PropTypes.string },
  )).isRequired,
};

export default Select;
