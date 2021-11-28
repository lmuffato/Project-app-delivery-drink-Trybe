import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectContainer = styled.label`
  span {
    display: block;
    margin: 5px 10px;
  }

  select {
    border-radius: 5px;
    min-width: max-content;
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    border: 2px solid gray;
    outline: none;
  }

  select:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

function Select({ elemId, label, data, value, testid, onValueChange }) {
  return (
    <SelectContainer htmlFor={ elemId }>
      <span>{label}</span>
      <select
        id={ elemId }
        data-testid={ testid }
        value={ value }
        onChange={ ({ target: { value: v } }) => onValueChange(v) }
      >
        {data.map((opt, i) => (
          <option key={ `${opt}${i}` } value={ opt.value }>{opt.text}</option>
        ))}
      </select>
    </SelectContainer>
  );
}

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  })).isRequired,
  elemId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Select.defaultProps = {
  testid: '',
  onValueChange: () => {},
};

export default Select;
