import React from 'react';
import {
  InputLabel,
  FormControl,
  NativeSelect,
} from '@mui/material';
import PropTypes from 'prop-types';

function DropDown({ name, items, dataTest }) {
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <FormControl
      variant="outlined"
      sx={ { m: 1, minWidth: 200 } }
    >
      <InputLabel id={ name }>{name}</InputLabel>
      <NativeSelect
        inputProps={ { 'data-testid': dataTest } }
        labelId={ name }
        label={ name }
      >
        <option value="">Escolha o vendedor</option>
        {items.map((item) => <option key={ item } value={ item }>{item}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default DropDown;

DropDown.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  dataTest: PropTypes.string,
}.isRequired;
